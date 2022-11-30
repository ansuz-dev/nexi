import React, {useEffect, useRef} from "react";
import NextImage, {ImageProps} from "next/legacy/image";

export interface GhostImageProps extends ImageProps {
  imgClassName?: string;
}

const GhostImage = ({className, imgClassName, src, ...rest}: GhostImageProps): JSX.Element => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const img = imgRef.current;
    if (img) {
      img.addEventListener("contextmenu", handleContextmenu);

      return () => {
        img.removeEventListener("contextmenu", handleContextmenu);
      };
    }
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {Boolean(src) && (
        <NextImage
          draggable={false}
          unselectable="on"
          unoptimized
          src={src}
          className={imgClassName}
          {...rest}
        />
      )}
    </div>
  );
};

GhostImage.defaultProps = {imgClassName: null};

export default GhostImage;
