import React, {useCallback, useEffect, useRef, useState} from "react";
import Image from "next/legacy/image";
import {getFormatUrl, getUrl} from "../../../utils";

export interface SlideItemProps {
  photo?: unknown;
  videoLink?: string;
  duration?: number;
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const ratio = 16 / 9;

const SlideItem = (props: SlideItemProps): JSX.Element => {
  const {photo, videoLink} = props;
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [size, setSize] = useState({width: 0, height: 0});

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const {width, height} = containerRef.current.getBoundingClientRect();

        const rw = height * ratio;
        const rh = width / ratio;
        if (rw >= width) {
          setSize({width: rw, height});
        } else {
          setSize({width, height: rh});
        }
      }
    };

    setIframeLoaded(false);

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const handleLoadIframe = useCallback(() => {
    setIframeLoaded(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex justify-center items-center overflow-hidden"
    >
      {!iframeLoaded && (
        <Image
          src={photoUrl}
          alt="slide photo"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={thumbnailUrl}
          unoptimized
          unselectable="on"
          draggable={false}
        />
      )}
      {Boolean(videoLink) && (
        <iframe
          ref={iframeRef}
          src={videoLink}
          width={size.width}
          height={size.height}
          className="absolute"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          onLoad={handleLoadIframe}
        />
      )}
    </div>
  );
};

SlideItem.defaultProps = {
  photo: null,
  videoLink: null,
  duration: 0,
};

export default SlideItem;
