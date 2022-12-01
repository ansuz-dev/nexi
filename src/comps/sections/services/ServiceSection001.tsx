import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, isGray} from "../../../utils";
import ServiceCard001 from "../../cards/services/ServiceCard001";
import {ServiceSectionProps} from "./servicesectionprops";

const ServiceSection001 = ({data, classes}: ServiceSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const background = getAttr(data, "background") as string;
  const services = getAttr(data, "services") as Array<unknown>;

  const {
    rootClass,
    containerClass,
    titleClass,
    listClass,
  } = useMemo(() => ({
    rootClass: cx(
      "ss001",
      "py-8 md:py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto",
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
      "grid md:grid-cols-2 gap-6",
      classes?.list,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid xl:grid-cols-12 gap-6">
          <div className="xl:col-start-2 xl:col-span-10 space-y-6 lg:space-y-8">
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

export default React.memo(ServiceSection001);
