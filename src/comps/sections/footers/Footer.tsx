import React from "react";
import dynamic from "next/dynamic";
import {GlobalFooterProps} from "./footerprops";

const comps = {
  "default": dynamic(() => import("./Footer001"), {suspense: true}),
  "footer001": dynamic(() => import("./Footer001"), {suspense: true}),
};

const FooterSection = ({data, ...rest}: GlobalFooterProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} {...rest} />
    </React.Suspense>
  );
};

FooterSection.defaultProps = {layout: "default"};

export default React.memo(FooterSection);
