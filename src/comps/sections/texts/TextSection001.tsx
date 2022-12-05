import React, {useMemo} from "react";
import cx from "classnames";
import {fixContent, getAttr, isGray} from "../../../utils";
import {TextSectionProps} from "./textsectionprops";

const TextSection001 = ({data, classes}: TextSectionProps): JSX.Element => {
  const content = getAttr(data, "content") as string;
  const background = getAttr(data, "background") as string;

  const {
    rootClass,
    containerClass,
    contentClass,
  } = useMemo(() => ({
    rootClass: cx(
      "ts001",
      "py-8 md:py-12",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto",
      classes?.container,
    ),
    contentClass: cx(
      "section-content",
      classes?.content,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid xl:grid-cols-12 gap-6">
          <div className="xl:col-start-2 xl:col-span-10 space-y-6 lg:space-y-8">
            <div
              className={contentClass}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{__html: fixContent(content)}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(TextSection001);
