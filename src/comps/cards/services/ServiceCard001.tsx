import React from "react";
import Image from "next/image";
import cx from "classnames";
import {getAttr, getFormatUrl, getUrl, shimmerBlur} from "../../../utils";
import {ServiceCardProps} from "./servicecardprops";

const photoHeight = 240;

const ServiceCard001 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const description = getAttr(service, "description") as string;
  const photo = getAttr(service, "photo");

  let photoUrl = getFormatUrl(photo, "small") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }

  const rootClass = cx(
    "border-2 border-neutral-100 rounded-md overflow-hidden bg-white",
    classes?.root,
  );
  const photoClass = cx("relative h-60", classes?.photo);
  const contentClass = cx("p-6 space-y-2", classes?.content);
  const nameClass = cx("text-2xl leading-normal", classes?.name);
  const descriptionClass = cx(
    "text-base leading-normal tracking-[0.5px] text-gray-500",
    classes?.description,
  );

  return (
    <div className={rootClass}>
      <div className={photoClass}>
        {
          Boolean(photoUrl) && (
            <Image
              fill
              unoptimized
              alt={name}
              src={photoUrl}
              draggable={false}
              loading="lazy"
              placeholder="blur"
              blurDataURL={shimmerBlur(photoHeight, photoHeight)}
              style={{objectFit: "cover"}}
            />
          )
        }
      </div>
      <div className={contentClass}>
        <h5 className={nameClass}>{name}</h5>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard001);
