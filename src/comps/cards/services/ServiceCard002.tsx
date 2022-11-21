import React from "react";
import Image from "next/image";
import cx from "classnames";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard002 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const photo = getAttr(service, "photo");

  let photoUrl = getFormatUrl(photo, "small") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "servicecard-002",
    "border-2 border-neutral-100 rounded-md overflow-hidden bg-white",
    classes?.root,
  );
  const photoClass = cx(
    "sc-photo",
    "relative h-52",
    classes?.photo,
  );
  const contentClass = cx(
    "sc-content",
    "p-4",
    classes?.content,
  );
  const nameClass = cx(
    "sc-name",
    "text-4xl leading-snug tracking-[0.25px] text-center",
    classes?.name,
  );

  return (
    <div className={rootClass}>
      <div className={contentClass}>
        <h4 className={nameClass}>{name}</h4>
      </div>
      <div className="p-14">
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
                blurDataURL={thumbnailUrl}
                style={{objectFit: "cover"}}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard002);
