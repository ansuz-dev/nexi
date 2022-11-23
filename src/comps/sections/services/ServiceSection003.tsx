import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import ServiceCard003 from "../../cards/services/ServiceCard003";
import Button from "../../items/buttons/Button";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection003 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string | undefined;
  const services = getAttr(data, "services") as Array<unknown> | undefined;
  const links = getAttr(data, "links") as Array<unknown> | undefined;

  const rootClass = cx(
    "servicesection-003",
    "py-12",
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "space-y-8",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug text-center",
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
        <div className={listClass}>
          {services?.map((service, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ServiceCard003 key={index} service={service} />
          ))}
        </div>
        <div className={linksClass}>
          {links?.map((link, index) => (
            <Button
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              link
              type="outlined"
              size="large"
              href={getAttr(link, "link") as string}
              label={getAttr(link, "title") as string}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceSection003.propTypes = {};

export default ServiceSection003;
