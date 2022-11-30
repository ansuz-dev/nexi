import React from "react";
import cx from "classnames";
import {getAttr, getUrl, shimmerBlur} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {ServiceCardProps} from "./servicecardprops";

const photoHeight = 56;

const ServiceCard003 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const description = getAttr(service, "description") as string;
  const photo = getAttr(service, "photo");

  const photoUrl = getUrl(photo) as string;

  const rootClass = cx(
    "servicecard003",
    "p-6 space-y-2",
    classes?.root,
  );
  const photoClass = cx(
    "sc-photo",
    "relative w-14 h-14",
    classes?.photo,
  );
  const contentClass = cx(
    "sc-content",
    "space-y-2",
    classes?.content,
  );
  const nameClass = cx(
    "sc-name",
    "text-xl font-medium leading-normal tracking-[0.15px]",
    classes?.name,
  );
  const descriptionClass = cx(
    "sc-description",
    "text-base leading-normal tracking-[0.5px] line-clamp-5",
    classes?.description,
  );

  return (
    <div className={rootClass}>
      <GhostImage
        className={photoClass}
        layout="fill"
        alt={name}
        src={photoUrl}
        loading="lazy"
        placeholder="blur"
        blurDataURL={shimmerBlur(photoHeight, photoHeight)}
        objectFit="cover"
        objectPosition="center"
      />
      <div className={contentClass}>
        <h6 className={nameClass}>{name}</h6>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard003);
