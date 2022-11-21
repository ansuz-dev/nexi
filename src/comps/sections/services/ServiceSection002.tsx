import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import ServiceCard002 from "../../cards/services/ServiceCard002";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection002 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string | undefined;
  const services = getAttr(data, "services") as Array<unknown> | undefined;

  const rootClass = cx(
    "servicesection-001",
    "p-12",
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
    "grid grid-cols-2 gap-6",
    classes?.list,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <h3 className={titleClass}>{title}</h3>
        <div className={listClass}>
          {services?.map((service, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ServiceCard002 key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

ServiceSection002.propTypes = {};

export default ServiceSection002;
