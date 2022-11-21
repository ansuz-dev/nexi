import React from "react";
import Image from "next/image";
import {getAttr, getFormatUrl, getUrl, shimmerBlur} from "../../../utils";
import {ServiceCardProps} from "./serviceprops";

const photoHeight = 240;

const Service001 = ({service}: ServiceCardProps): JSX.Element => {
  const name = getAttr(service, "name") as string;
  const description = getAttr(service, "description") as string;
  const photo = getAttr(service, "photo");

  let photoUrl = getFormatUrl(photo, "small") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  return (
    <div className="border-2 border-neutral-100 rounded-md overflow-hidden bg-white">
      <div className="relative h-60">
        {
          Boolean(photoUrl) && (
            <Image
              alt={name}
              fill
              src={photoUrl}
              blurDataURL={shimmerBlur(photoHeight, photoHeight)}
              draggable={false}
              loading="lazy"
              placeholder="blur"
              style={{objectFit: "cover"}}
              unoptimized
            />
          )
        }
      </div>
      <div className="p-6 space-y-2">
        <h5>{name}</h5>
        <p className="body1 text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Service001;
