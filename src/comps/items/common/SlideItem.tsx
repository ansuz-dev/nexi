import React, {useCallback, useEffect, useRef, useState} from "react";
import Image from "next/legacy/image";
import {useSwiperSlide} from "swiper/react";
import {getBlurData, getUrl} from "../../../utils";

export interface SlideItemProps {
  photo?: unknown;
  videoLink?: string;
  duration?: number;
}

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const ratio = 16 / 9;
const mobileWidth = 800;

const SlideItem = (props: SlideItemProps): JSX.Element => {
  const {photo, videoLink} = props;
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getBlurData(photo);

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const [size, setSize] = useState({width: 0, height: 0});

  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const {isActive} = useSwiperSlide();

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const {width, height} = containerRef.current.getBoundingClientRect();
        setIsMobile(width <= mobileWidth);

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
      {(isMobile || !iframeLoaded || !isActive) && Boolean(photoUrl) && (
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
      {!isMobile && Boolean(videoLink) && isActive && (
        <iframe
          ref={iframeRef}
          src={videoLink}
          width={size.width}
          height={size.height}
          className="absolute"
          frameBorder="0"
          allow="autoplay; fullscreen;"
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
