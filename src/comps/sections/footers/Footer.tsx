import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalFooterProps} from "./footerprops";

const comps = {
  "default": dynamic(() => import("./Footer001"), {suspense: true}),
  "footer001": dynamic(() => import("./Footer001"), {suspense: true}),
};

const FooterSection = (props: GlobalFooterProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

FooterSection.defaultProps = {layout: "default"};

export default React.memo(FooterSection);
