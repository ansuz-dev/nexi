import React from "react";
import cx from "classnames";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import {GallerySectionProps} from "./gallerysectionprops";

const GallerySection001 = ({data, classes}: GallerySectionProps): JSX.Element => {
  const photos = getAttr(data, "photos", "data") as Array<unknown> | undefined;

  const rootClass = cx(
    "gallerysection-001",
    "py-12",
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container mx-auto",
    classes?.container,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <Swiper
          style={{paddingBottom: 50}}
          loop
          speed={1000}
          spaceBetween={4}
          slidesPerView={1}
          pagination={{clickable: true}}
          modules={[Pagination]}
          breakpoints={{
            640: {slidesPerView: 2},
            768: {slidesPerView: 3},
            1024: {slidesPerView: 4},
          }}
        >
          {photos?.map((photo, index) => {
            let photoUrl = getFormatUrl(photo, "small") as string;
            if (!photo) {
              photoUrl = getUrl(photo) as string;
            }
            const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

            return (
              // eslint-disable-next-line react/no-array-index-key
              <SwiperSlide key={index}>
                <div className="relative w-full h-80">
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </section>
  );
};

GallerySection001.propTypes = {};

export default React.memo(GallerySection001);
