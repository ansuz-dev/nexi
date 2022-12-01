import React, {useMemo} from "react";
import cx from "classnames";

import {getAttr} from "../../../utils";
import {StatCardProps} from "./statcardprops";

const StatCard001 = ({stat, classes}: StatCardProps): JSX.Element => {
  const value = getAttr(stat, "value") as string;
  const label = getAttr(stat, "label") as string;

  const {
    rootClass,
    contentClass,
    labelClass,
    valueClass,
  } = useMemo(() => ({
    rootClass: cx(
      "statscard001",
      "bg-secondary-600 p-4 md:p-6 rounded",
      classes?.root,
    ),
    contentClass: cx(
      "stc-content",
      "text-center text-white space-y-2",
      classes?.content,
    ),
    labelClass: cx(
      "stc-label",
      "text-sm font-normal leading-normal tracking-[0.25px]",
      "md:text-base md:font-normal md:leading-normal md:tracking-[0.5px]",
      "lg:text-xl lg:font-medium lg:leading-normal lg:tracking-[0.15px]",
      classes?.name,
    ),
    valueClass: cx(
      "stc-value",
      "text-4xl font-normal leading-snug tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.description,
    ),
  }), [classes]);

  return (
    <div className={rootClass}>
      <div className={contentClass}>
        <h3 className={valueClass}>{value}</h3>
        <h6 className={labelClass}>{label}</h6>
      </div>
    </div>
  );
};

export default React.memo(StatCard001);
