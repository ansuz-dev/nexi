import React, {useMemo} from "react";
import cx from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";

import {getAttr, isGray} from "../../../utils";
import Button from "../../items/buttons/Button";
import PricingCard001 from "../../cards/pricings/PricingCard001";
import {PricingSectionProps} from "./pricingsectionprops";

const PricingSection001 = ({data, classes}: PricingSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown>;
  const plans = getAttr(data, "plans") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "ps001",
      "py-8 md:py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container space-y-12",
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
    subtitleClass: cx(
      "section-subtitle",
      "text-base font-normal leading-normal tracking-[0.5px]",
      classes?.subtitle,
    ),
    linksClass: cx(
      "section-links",
      "flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4",
      classes?.links,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-start-2 md:col-span-4 space-y-6">
            <div className="space-y-4 text-center">
              <h3 className={titleClass}>{title}</h3>
              <p className={subtitleClass}>{subtitle}</p>
            </div>
            {Boolean(links) && (
              <div className={linksClass}>
                {links.map((link, index) => (
                  <Button
                    key={index}
                    link
                    className="w-full md:w-auto"
                    type="solid"
                    color="primary"
                    href={getAttr(link, "link") as string}
                    label={getAttr(link, "title") as string}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        {
          Boolean(plans) && (
            <Swiper
              style={{paddingBottom: 50}}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{clickable: true}}
              modules={[Pagination]}
              breakpoints={{
                640: {slidesPerView: 2},
                768: {slidesPerView: 3},
                1024: {slidesPerView: 4},
              }}
            >
              {Boolean(plans) && plans.map((pricing, index) => (
                <SwiperSlide key={index}>
                  <PricingCard001 pricing={pricing} />
                </SwiperSlide>
              ))}
            </Swiper>
          )
        }
      </div>
    </section>
  );
};

export default React.memo(PricingSection001);
