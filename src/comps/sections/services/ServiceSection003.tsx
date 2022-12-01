import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import ServiceCard003 from "../../cards/services/ServiceCard003";
import Button from "../../items/buttons/Button";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection003 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const services = getAttr(data, "services") as Array<unknown>;
  const links = getAttr(data, "links") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
    listClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "ss003",
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
      "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
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
        {Boolean(services) && (
          <div className={listClass}>
            {services.map((service, index) => (
              <ServiceCard003 key={index} service={service} />
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
                type="outlined"
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

export default React.memo(ServiceSection003);
