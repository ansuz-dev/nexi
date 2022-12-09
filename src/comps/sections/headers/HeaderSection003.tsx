import React, {useEffect, useMemo, useState} from "react";
import cx from "classnames";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperClass, {EffectFade} from "swiper";
import {getAttr, stepperLoop} from "../../../utils";
import SlideItem, {SlideItemProps} from "../../items/common/SlideItem";
import ButtonGroup from "../../items/buttons/ButtonGroup";
import {HeaderSectionProps} from "./headersectionprops";

const defaultDuration = 5;
const secondTicks = 1000;
const transitionTime = 300;

const HeaderSection003 = ({data, classes}: HeaderSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown> | undefined;
  const slides = getAttr(data, "slides") as Array<SlideItemProps> | undefined;
  const [swiper, setSwiper] = useState<SwiperClass>();

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "hs003",
      "relative py-40",
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container text-center",
      classes?.container,
    ),
    titleClass: cx(
      "section-title",
      "text-center text-white",
      "text-2xl font-normal leading-normal",
      "md:text-4xl md:font-normal md:leading-snug md:tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.title,
    ),
    subtitleClass: cx(
      "section-subtitle",
      "text-xl font-medium leading-normal tracking-[0.15px] text-white",
      classes?.subtitle,
    ),
    linksClass: cx(
      "section-links",
      "flex justify-center space-x-2",
      classes?.links,
    ),
  }), [classes]);

  useEffect(() => {
    if (swiper && !swiper.destroyed) {
      const durations = slides?.map(slide => (
        Number(slide.duration) || defaultDuration) * secondTicks) ?? [];
      const state = stepperLoop(durations, () => {
        swiper.slideNext(transitionTime, false);
      });

      return () => {
        state.status = "stopped";
      };
    }
  }, [slides, swiper]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-start-3 lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <h3 className={titleClass}>{title}</h3>
              <h6 className={subtitleClass}>{subtitle}</h6>
            </div>
            <ButtonGroup
              className={linksClass}
              size="large"
              buttons={links}
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <Swiper
          loop
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          modules={[EffectFade]}
          onSwiper={setSwiper}
          className="w-full h-full"
        >
          {slides?.map((slide, index) => (
            <SwiperSlide key={index}>
              <SlideItem {...slide} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{background: "linear-gradient(0deg, rgba(17, 17, 17, 0.2), rgba(17, 17, 17, 0.2))"}}
      />
    </section>
  );
};

export default React.memo(HeaderSection003);
