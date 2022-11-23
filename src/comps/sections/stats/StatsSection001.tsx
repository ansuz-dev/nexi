import React from "react";
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

  const rootClass = cx(
    "servicesection-001",
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
    "text-5xl leading-snug text-center text-center",
    classes?.title,
  );
  const listClass = cx(
    "section-list",
    "grid grid-cols-4 gap-4",
    classes?.list,
  );
  const linksClass = cx(
    "section-links",
    "flex justify-center space-x-2",
    classes?.links,
  );

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
                size="large"
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

StatsSection001.propTypes = {};

export default React.memo(StatsSection001);
