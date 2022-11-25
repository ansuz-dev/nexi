import React from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import ServiceCard004 from "../../cards/services/ServiceCard004";
import Button from "../../items/buttons/Button";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection004 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const services = getAttr(data, "services") as Array<unknown>;
  const links = getAttr(data, "links") as Array<unknown>;

  const rootClass = cx(
    "ss004",
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
    "text-5xl leading-snug text-center",
    classes?.title,
  );
  const listClass = cx(
    "section-list",
    "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6",
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
        {Boolean(services) && (
          <div className={listClass}>
            {services.map((service, index) => (
              <ServiceCard004 key={index} service={service} />
            ))}
          </div>
        )}
        {Boolean(links) && (
          <div className={linksClass}>
            {links.map((link, index) => (
              <Button
                key={index}
                link
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

ServiceSection004.propTypes = {};

export default React.memo(ServiceSection004);
