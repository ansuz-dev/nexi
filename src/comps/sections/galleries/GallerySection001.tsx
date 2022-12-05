import React, {useMemo} from "react";
import cx from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import {getAttr, getBlurData, getFormatUrl, getUrl, isGray} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {GallerySectionProps} from "./gallerysectionprops";

const GallerySection001 = ({data, classes}: GallerySectionProps): JSX.Element => {
  const background = getAttr(data, "background") as string;
  const photos = getAttr(data, "photos", "data") as Array<unknown>;

  const {
    rootClass,
    containerClass,
  } = useMemo(() => ({
    rootClass: cx(
      "gs001",
      "py-8 md:py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto",
      classes?.container,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <Swiper
          style={{paddingBottom: 50}}
          loop
          spaceBetween={4}
          slidesPerView="auto"
          pagination={{clickable: true}}
          modules={[Pagination]}
          breakpoints={{
            320: {slidesPerView: 1},
            640: {slidesPerView: 2},
            768: {slidesPerView: 3},
            1024: {slidesPerView: 4},
          }}
        >
          {Boolean(photos) && photos.map((photo, index) => {
            let photoUrl = getFormatUrl(photo, "medium") as string;
            if (!photo) {
              photoUrl = getUrl(photo) as string;
            }
            const thumbnailUrl = getBlurData(photo);

            return (
              <SwiperSlide key={index}>
                <GhostImage
                  className="relative w-full h-80"
                  layout="fill"
                  alt="gallery item"
                  src={photoUrl}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={thumbnailUrl}
                  objectFit="cover"
                  objectPosition="center"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

    </section>
  );
};

export default React.memo(GallerySection001);
