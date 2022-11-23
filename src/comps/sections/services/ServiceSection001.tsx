import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import ServiceCard001 from "../../cards/services/ServiceCard001";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection001 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string | undefined;
  const services = getAttr(data, "services") as Array<unknown> | undefined;

  const rootClass = cx(
    "servicesection-001",
    "py-12",
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container mx-auto",
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
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-2 col-span-10 space-y-8">
            <h3 className={titleClass}>{title}</h3>
            <div className={listClass}>
              {services?.map((service, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <ServiceCard001 key={index} service={service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceSection001.propTypes = {};

export default ServiceSection001;
