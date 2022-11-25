import React from "react";
import Image from "next/legacy/image";
import cx from "classnames";
import Link from "next/link";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard004 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const photo = getAttr(service, "photo");
  const link = getAttr(service, "link") as string || "";

  let photoUrl = getFormatUrl(photo, "medium") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "servicecard-004",
    "bg-white rounded-md overflow-hidden px-2 py-4 md:py-6 space-y-4",
    "hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    classes?.root,
  );
  const photoClass = cx(
    "sc-photo",
    "relative h-32",
    classes?.photo,
  );
  const contentClass = cx(
    "sc-content",
    classes?.content,
  );
  const nameClass = cx(
    "sc-name",
    "text-base leading-normal tracking-[0.5px] text-center",
    classes?.name,
  );

  return (
    <Link href={link}>
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
                objectFit="contain"
                objectPosition="center"
              />
            )
          }
        </div>
        <div className={contentClass}>
          <p className={nameClass}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ServiceCard004);