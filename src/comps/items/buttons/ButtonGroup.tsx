import React from "react";
import {getAttr, getUrl} from "../../../utils";
import GhostImage from "../images/GhostImage";
import {ButtonSizes, ButtonTypes} from "./buttonprops";
import Button from "./Button";

interface ButtonGroupProps {
  className?: string;
  buttonClassName?: string;
  size?: ButtonSizes;
  buttons?: Array<unknown>;
}

const ButtonGroup = ({
  className,
  buttonClassName,
  size,
  buttons,
}: ButtonGroupProps): JSX.Element | null => {
  if (!buttons) {
    return null;
  }

  return (
    <div className={className}>
      {buttons.map((button, index) => {
        const href = getAttr(button, "link") as string;
        const label = getAttr(button, "title") as string;
        const type = getAttr(button, "type") as ButtonTypes;
        const icon = getAttr(button, "icon");
        const iconUrl = getUrl(icon) as string;

        return (
          <Button
            key={index}
            link
            className={buttonClassName}
            size={size}
            href={href}
            label={label}
            type={type}
            icon={iconUrl ? <GhostImage
              src={iconUrl}
              className="relative w-6 h-6"
              layout="fill"
            /> : undefined}
          />
        );
      })}
    </div>
  );
};

ButtonGroup.defaultProps = {
  className: "",
  buttonClassName: "",
  size: "medium",
  buttons: undefined,
};

export default React.memo(ButtonGroup);
