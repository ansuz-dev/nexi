import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import Button from "../../items/buttons/Button";
import PricingCard001 from "../../cards/pricings/PricingCard001";
import {PricingSectionProps} from "./pricingsectionprops";

const PricingSection001 = ({data, classes}: PricingSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown> | undefined;
  const plans = getAttr(data, "plans") as Array<unknown>;

  const rootClass = cx(
    "pricingsection-001",
    "py-12",
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container space-y-12",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug",
    classes?.title,
  );
  const subtitleClass = cx(
    "section-subtitle",
    "text-base leading-normal tracking-[0.5px]",
    classes?.subtitle,
  );
  const linksClass = cx(
    "section-links",
    "flex justify-center space-x-4",
    classes?.links,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-start-2 col-span-4 space-y-6">
            <div className="space-y-4 text-center">
              <h3 className={titleClass}>{title}</h3>
              <p className={subtitleClass}>{subtitle}</p>
            </div>
            <div className={linksClass}>
              {links?.map((link, index) => (
                <Button
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  link
                  type="solid"
                  color="primary"
                  href={getAttr(link, "link") as string}
                  label={getAttr(link, "title") as string}
                />
              ))}
            </div>
          </div>
        </div>
        {
          Boolean(plans) && (

            <div className="grid grid-cols-4">
              {
                plans.map((pricing, index) => (
                // eslint-disable-next-line react/no-array-index-key
                  <PricingCard001 key={index} pricing={pricing} />
                ))
              }
            </div>
          )
        }
      </div>
    </section>
  );
};

PricingSection001.propTypes = {};

export default React.memo(PricingSection001);
