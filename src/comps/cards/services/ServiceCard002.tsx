import React from "react";
import cx from "classnames";
import Link from "next/link";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard002 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const photo = getAttr(service, "photo");
  const link = getAttr(service, "link") as string || "";

  let photoUrl = getFormatUrl(photo, "medium") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "servicecard002",
    "border-2 border-transparent rounded-md overflow-hidden bg-white",
    "hover:border-primary-500 hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    classes?.root,
  );
  const photoClass = cx(
    "sc-photo",
    "relative h-52",
    classes?.photo,
  );
  const contentClass = cx(
    "sc-content",
    "p-4 bg-primary-50",
    classes?.content,
  );
  const nameClass = cx(
    "sc-name",
    "text-4xl leading-snug tracking-[0.25px] text-center",
    classes?.name,
  );

  return (
    <Link href={link}>
      <div className={rootClass}>
        <div className={contentClass}>
          <h4 className={nameClass}>{name}</h4>
        </div>
        <div className="p-14">
          <GhostImage
            className={photoClass}
            layout="fill"
            alt={name}
            src={photoUrl}
            loading="lazy"
            placeholder="blur"
            blurDataURL={thumbnailUrl}
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ServiceCard002);
