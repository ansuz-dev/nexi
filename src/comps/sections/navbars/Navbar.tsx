import React from "react";
import dynamic from "next/dynamic";
import {GlobalNavbarProps} from "./navbarprops";

const comps = {
  "default": dynamic(() => import("./Navbar001"), {suspense: true}),
  "nav001": dynamic(() => import("./Navbar001"), {suspense: true}),
};

const HeaderSection = ({data}: GlobalNavbarProps) : JSX.Element => {
  const layout = data.layout ?? "default";
  const Component = comps[layout];

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component data={data} />
    </React.Suspense>
  );
};

HeaderSection.defaultProps = {layout: "default"};

export default HeaderSection;
