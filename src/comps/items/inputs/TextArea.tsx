import React from "react";
import dynamic from "next/dynamic";
import {getLayout} from "../../../utils";
import {GlobalTextAreaProps} from "./inputprops";

const comps = {
  "default": dynamic(() => import("./TextArea001"), {suspense: true}),
  "input001": dynamic(() => import("./TextArea001"), {suspense: true}),
};

const TextArea = React.forwardRef<HTMLTextAreaElement, GlobalTextAreaProps>(
  (props, ref): JSX.Element => {
    const Component = getLayout(comps, props.layout);

    return (
      <React.Suspense fallback={"Loading..."}>
        <Component ref={ref} {...props} />
      </React.Suspense>
    );
  },
);

TextArea.defaultProps = {layout: "default"};

export default React.memo(TextArea);
