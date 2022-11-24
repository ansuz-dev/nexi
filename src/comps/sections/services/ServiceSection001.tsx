import React from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import ServiceCard001 from "../../cards/services/ServiceCard001";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection001 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const services = getAttr(data, "services") as Array<unknown>;

  const rootClass = cx(
    "ss001",
    "py-12",
    {"bg-neutral-50": isGray(background)},
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
            {Boolean(services) && (
              <div className={listClass}>
                {services.map((service, index) => (
                  <ServiceCard001 key={index} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ServiceSection001.propTypes = {};

export default React.memo(ServiceSection001);
