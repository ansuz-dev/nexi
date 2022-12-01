import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import Button from "../../items/buttons/Button";
import StatCard001 from "../../cards/stats/StatCard001";
import {StatsSectionProps} from "./statssectionprops";

const StatsSection001 = ({data, classes}: StatsSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const stats = getAttr(data, "stats") as Array<unknown>;
  const links = getAttr(data, "links") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
    listClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "sts001",
      "py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto space-y-6 lg:space-y-8",
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
    listClass: cx(
      "section-list",
      "grid grid-cols-2 lg:grid-cols-4 gap-4",
      classes?.list,
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
        <h3 className={titleClass}>{title}</h3>
        {Boolean(stats) && (
          <div className={listClass}>
            {stats.map((stat, index) => (
              <StatCard001 key={index} stat={stat} />
            ))}
          </div>
        )}
        {Boolean(links) && (
          <div className={linksClass}>
            {links.map((link, index) => (
              <Button
                key={index}
                link
                className="w-full md:w-auto"
                href={getAttr(link, "link") as string}
                label={getAttr(link, "title") as string}
              />
            ))}
          </div>
        )}
      </div>

    </section>
  );
};

export default React.memo(StatsSection001);
