import React from "react";
import Image from "next/legacy/image";
import cx from "classnames";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard001 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const description = getAttr(service, "description") as string;
  const photo = getAttr(service, "photo");

  let photoUrl = getFormatUrl(photo, "large") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "servicecard-001",
    "border-2 border-neutral-100 rounded-md overflow-hidden bg-white hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    classes?.root,
  );
  const photoClass = cx(
    "sc-photo",
    "relative h-60",
    classes?.photo,
  );
  const contentClass = cx(
    "sc-content",
    "p-6 space-y-2",
    classes?.content,
  );
  const nameClass = cx(
    "sc-name",
    "text-2xl leading-normal",
    classes?.name,
  );
  const descriptionClass = cx(
    "sc-description",
    "text-base leading-normal tracking-[0.5px] text-gray-500",
    classes?.description,
  );

  return (
    <div className={rootClass}>
      <div className={photoClass}>
        {
          Boolean(photoUrl) && (
            <Image
              layout="fill"
              unoptimized
              alt={name}
              src={photoUrl}
              draggable={false}
              unselectable="on"
              loading="lazy"
              placeholder="blur"
              blurDataURL={thumbnailUrl}
              objectFit="cover"
              objectPosition="center"
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
