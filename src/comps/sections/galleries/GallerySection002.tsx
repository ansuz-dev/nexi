import React, {useMemo} from "react";
import cx from "classnames";

import {getAttr, getFormatUrl, getUrl, isGray} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {GallerySectionProps} from "./gallerysectionprops";

const photoClasses = [
  "col-span-4 row-span-3",
  "col-span-3 row-span-2",
  "col-span-3 row-span-3",
  "col-span-4 row-span-2",
];

const GallerySection002 = ({data, classes}: GallerySectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const photos = getAttr(data, "photos", "data") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
  } = useMemo(() => ({
    rootClass: cx(
      "gs002",
      "py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto space-y-8",
      classes?.container,
    ),
    titleClass: cx(
      "section-title",
      "text-center",
      "text-2xl font-normal leading-normal",
      "md:text-4xl md:font-normal md:leading-snug md:tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.title,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <h3 className={titleClass}>{title}</h3>
        {Boolean(photos) && (
          <div className="relative w-full pt-[71.43%]">
            <div className="absolute top-0 left-0 grid grid-cols-7 grid-rows-5 gap-1 w-full h-full">
              {photos.slice(0, photoClasses.length).map((photo, index) => {
                let photoUrl = getFormatUrl(photo, "large") as string;
                if (!photo) {
                  photoUrl = getUrl(photo) as string;
                }
                const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

                return (
                  <GhostImage
                    key={index}
                    className={`relative ${photoClasses[index]}`}
                    layout="fill"
                    alt="gallery item"
                    src={photoUrl}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={thumbnailUrl}
                    objectFit="cover"
                    objectPosition="center"
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(GallerySection002);
