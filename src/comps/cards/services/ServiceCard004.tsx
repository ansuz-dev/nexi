import React, {useMemo} from "react";
import cx from "classnames";
import Link from "next/link";
import {getAttr, getBlurData, getFormatUrl, getUrl} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard004 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const photo = getAttr(service, "photo");
  const link = getAttr(service, "link") as string || "";

  let photoUrl = getFormatUrl(photo, "medium") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getBlurData(photo);

  const {
    rootClass,
    photoClass,
    contentClass,
    nameClass,
  } = useMemo(() => ({
    rootClass: cx(
      "servicecard004",
      "bg-white rounded-md overflow-hidden p-3 md:py-4 space-y-4",
      "hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
      classes?.root,
    ),
    photoClass: cx(
      "sc-photo",
      "relative h-32",
      classes?.photo,
    ),
    contentClass: cx(
      "sc-content",
      classes?.content,
    ),
    nameClass: cx(
      "sc-name",
      "text-base font-medium leading-normal tracking-[0.5px] text-center",
      classes?.name,
    ),
  }), [classes]);

  return (
    <Link href={link}>
      <div className={rootClass}>
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
        <div className={contentClass}>
          <p className={nameClass}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(ServiceCard004);
