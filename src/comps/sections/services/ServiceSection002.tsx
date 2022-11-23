import React from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import ServiceCard002 from "../../cards/services/ServiceCard002";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection002 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const services = getAttr(data, "services") as Array<unknown>;

  const rootClass = cx(
    "servicesection-002",
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
    "grid grid-cols-2 gap-6",
    classes?.list,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <h3 className={titleClass}>{title}</h3>
        {Boolean(services) && (
          <div className={listClass}>
            {services.map((service, index) => (
              <ServiceCard002 key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

ServiceSection002.propTypes = {};

export default React.memo(ServiceSection002);
