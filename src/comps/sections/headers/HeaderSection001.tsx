import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, getBlurData, getUrl} from "../../../utils";
import Button from "../../items/buttons/Button";
import GhostImage from "../../items/images/GhostImage";
import {ButtonTypes} from "../../items/buttons/buttonprops";
import {HeaderSectionProps} from "./headersectionprops";
import ButtonGroup from "../../items/buttons/ButtonGroup";

const HeaderSection001 = ({data, classes}: HeaderSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown> | undefined;
  const photo = getAttr(data, "slides", 0, "photo");
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getBlurData(photo);

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "hs001",
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
        <GhostImage
          className="relative w-full h-full"
          layout="fill"
          priority
          alt={title}
          src={photoUrl}
          placeholder="blur"
          blurDataURL={thumbnailUrl}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{background: "linear-gradient(0deg, rgba(17, 17, 17, 0.2), rgba(17, 17, 17, 0.2))"}}
      />
    </section>
  );
};

export default React.memo(HeaderSection001);
