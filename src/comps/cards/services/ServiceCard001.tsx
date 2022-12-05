import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, getBlurData, getFormatUrl, getUrl} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {ServiceCardProps} from "./servicecardprops";

const ServiceCard001 = ({service, classes}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const description = getAttr(service, "description") as string;
  const photo = getAttr(service, "photo");

  let photoUrl = getFormatUrl(photo, "large") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getBlurData(photo);

  const {
    rootClass,
    photoClass,
    contentClass,
    nameClass,
    descriptionClass,
  } = useMemo(() => ({
    rootClass: cx(
      "servicecard001",
      "border-2 border-neutral-100 rounded-md overflow-hidden bg-white hover:drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
      classes?.root,
    ),
    photoClass: cx(
      "sc-photo",
      "relative h-44 md:h-60",
      classes?.photo,
    ),
    contentClass: cx(
      "sc-content",
      "p-4 md:p-6 space-y-2",
      classes?.content,
    ),
    nameClass: cx(
      "sc-name",
      "text-xl font-medium leading-normal tracking-[0.15px]",
      "md:text-2xl md:font-normal md:leading-normal",
      classes?.name,
    ),
    descriptionClass: cx(
      "sc-description",
      "text-black-secondary",
      "text-sm font-normal leading-normal tracking-[0.25px]",
      "md:text-base md:leading-normal md:tracking-[0.5px]",
      classes?.description,
    ),
  }), [classes]);

  return (
    <div className={rootClass}>
      <GhostImage
        className={photoClass}
        layout="fill"
        alt={name}
        src={photoUrl}
        loading="lazy"
        placeholder="blur"
        blurDataURL={thumbnailUrl}
        objectFit="cover"
        objectPosition="center"
      />
      <div className={contentClass}>
        <h5 className={nameClass}>{name}</h5>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default React.memo(ServiceCard001);
