import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalNavbarProps} from "./navbarprops";

const comps = {
  "default": dynamic(() => import("./Navbar001"), {suspense: true}),
  "nav001": dynamic(() => import("./Navbar001"), {suspense: true}),
};

const Navbar = (props: GlobalNavbarProps) : JSX.Element => {
  const Component = getLayout(comps, props.data.layout);

  return (
    <React.Suspense fallback={"Loading..."}>
      <Component {...props} />
    </React.Suspense>
  );
};

Navbar.defaultProps = {layout: "default"};

export default React.memo(Navbar);
