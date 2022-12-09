import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, getUrl, isGray} from "../../../utils";
import PartnerCard001 from "../../cards/partners/PartnerCard001";
import Button from "../../items/buttons/Button";
import {ButtonTypes} from "../../items/buttons/buttonprops";
import GhostImage from "../../items/images/GhostImage";
import {PartnerSectionProps} from "./partnersectionprops";

const PartnerSection004 = ({data, classes}: PartnerSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const partners = getAttr(data, "partners") as Array<unknown>;
  const links = getAttr(data, "links") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
    listClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "pns001",
      "py-8 md:py-12",
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
      "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
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
        {Boolean(partners) && (
          <div className={listClass}>
            {partners.map((partner, index) => (
              <PartnerCard001 key={index} partner={partner} />
            ))}
          </div>
        )}
        {Boolean(links) && (
          <div className={linksClass}>
            {links.map((link, index) => {
              const href = getAttr(link, "link") as string;
              const label = getAttr(link, "title") as string;
              const type = getAttr(link, "title") as ButtonTypes;
              const icon = getAttr(link, "icon");
              const iconUrl = getUrl(icon) as string;

              return (
                <Button
                  key={index}
                  link
                  size="large"
                  href={href}
                  label={label}
                  type={type}
                  icon={iconUrl ? <GhostImage
                    src={iconUrl}
                    className="relative w-6 h-6"
                    layout="fill"
                  /> : undefined}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default React.memo(PartnerSection004);
