import React from "react";
import cx from "classnames";
import Image from "next/image";

import {getAttr, getFormatUrl, getUrl, isGray} from "../../../utils";
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

  const rootClass = cx(
    "gallerysection-002",
    "py-12",
    {"bg-neutral-50": isGray(background)},
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container mx-auto space-y-8",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug text-center",
    classes?.title,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <h3 className={titleClass}>{title}</h3>
        {Boolean(photos) && (
          <div className="relative w-full pt-[71.43%]">
            <div className="absolute top-0 left-0 grid grid-cols-7 grid-rows-5 gap-1 w-full h-full">
              {photos.slice(0, photoClasses.length).map((photo, index) => {
                let photoUrl = getFormatUrl(photo, "small") as string;
                if (!photo) {
                  photoUrl = getUrl(photo) as string;
                }
                const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

                return (
                  <div
                    key={index}
                    className={`relative ${photoClasses[index]}`}
                  >
                    <Image
                      fill
                      unoptimized
                      alt="gallery item"
                      src={photoUrl}
                      draggable={false}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={thumbnailUrl}
                      style={{objectFit: "cover"}}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

GallerySection002.propTypes = {};

export default React.memo(GallerySection002);
