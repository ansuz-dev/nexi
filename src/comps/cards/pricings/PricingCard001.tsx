import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import Button from "../../items/buttons/Button";
import {PricingCardProps} from "./pricingcardprops";

const PricingCard001 = ({pricing, classes}: PricingCardProps): JSX.Element => {
  const title = getAttr(pricing, "title") as string;
  const price = getAttr(pricing, "price") as string;
  const unit = getAttr(pricing, "unit") as string;
  const plan = getAttr(pricing, "plan") as string | undefined;
  const recommended = getAttr(pricing, "recommended") as string;
  const reversed = getAttr(pricing, "reversed") as boolean;
  const link = getAttr(pricing, "link") as string;
  const linkTitle = getAttr(pricing, "linkTitle") as string;

  const list = plan?.split("\n") ?? [];

  const rootClass = cx(
    "statscard-001",
    classes?.root,
  );
  const contentClass = cx(
    "pc-content",
    "bg-white px-6 py-16 space-y-6 border border-neutral-100",
    classes?.content,
  );
  const titleClass = cx(
    "pc-title",
    "text-xl font-medium leading-normal tracking-[0.15px]",
    classes?.title,
  );
  const priceClass = cx(
    "pc-price",
    "text-4xl leading-snug tracking-[0.25px] text-secondary-600",
    classes?.price,
  );
  const unitClass = cx(
    "pc-unit",
    "text-sm leading-normal font-bold tracking-[0.1px]",
    classes?.price,
  );

  return (
    <div className={rootClass}>
      {
        recommended ? (
          <div className="flex h-6 justify-center items-center bg-secondary-50">
            <p className="text-xs font-medium tracking-[0.25px] text-secondary-800">
              {recommended}
            </p>
          </div>
        ) : (
          <div className="h-6" />
        )
      }
      <div className={contentClass}>
        <div className="flex flex-col items-center space-y-2">
          <h6 className={titleClass}>{title}</h6>
          <div className={`flex space-x-1 items-end ${reversed ? "flex-row-reverse" : ""}`}>
            <span className={priceClass}>{price}</span>
            <div className="py-1.5">
              <span className={unitClass}>{unit}</span>
            </div>
          </div>
          <Button
            link
            type="outlined"
            color="primary"
            size="small"
            href={link}
            label={linkTitle}
          />
        </div>
        <div className="border-b border-neutral-100" />
        <div className="space-y-1">
          {
            list.map((item, index) => (
              <div key={index} className="flex space-x-2 py-0.5">
                <div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#1D7FF7" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M9.5501 17.6501L4.2251 12.3251L5.2751 11.2501L9.5501 15.5251L18.7251 6.3501L19.7751 7.4251L9.5501 17.6501Z" />
                    </g>
                  </svg>
                </div>
                <div className="py-0.5 text-sm leading-relaxed tracking-[0.25px]">
                  {item}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default React.memo(PricingCard001);
