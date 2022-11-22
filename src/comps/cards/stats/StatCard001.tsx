import React from "react";
import cx from "classnames";
import {getAttr} from "../../../utils";
import {StatCardProps} from "./statcardprops";

const StatCard001 = ({stat, classes}: StatCardProps): JSX.Element => {
  const value = getAttr(stat, "value") as string;
  const label = getAttr(stat, "label") as string;

  const rootClass = cx(
    "statscard-001",
    "bg-secondary-100 p-6 rounded",
    classes?.root,
  );
  const contentClass = cx(
    "stc-content",
    "text-center text-white space-y-2",
    classes?.content,
  );
  const labelClass = cx(
    "stc-label",
    "text-xl font-medium leading-normal tracking-[0.15px]",
    classes?.name,
  );
  const valueClass = cx(
    "stc-value",
    "text-5xl leading-snug",
    classes?.description,
  );

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
