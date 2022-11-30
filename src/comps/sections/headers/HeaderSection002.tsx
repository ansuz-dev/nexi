import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import Button from "../../items/buttons/Button";
import SlideItem, {SlideItemProps} from "../../items/common/SlideItem";
import {HeaderSectionProps} from "./headersectionprops";

const HeaderSection002 = ({data, classes}: HeaderSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown> | undefined;
  const slide = getAttr(data, "slides", 0) as SlideItemProps | undefined;

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "hs002",
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
      "text-5xl leading-snug text-center text-white",
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
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-4 col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className={titleClass}>{title}</h3>
              <h6 className={subtitleClass}>{subtitle}</h6>
            </div>
            <div className={linksClass}>
              {links?.map((link, index) => (
                <Button
                  key={index}
                  link
                  size="large"
                  href={getAttr(link, "link") as string}
                  label={getAttr(link, "title") as string}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        {Boolean(slide) && <SlideItem {...slide} />}
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{background: "linear-gradient(0deg, rgba(17, 17, 17, 0.2), rgba(17, 17, 17, 0.2))"}}
      />
    </section>
  );
};

HeaderSection002.propTypes = {};

export default React.memo(HeaderSection002);
