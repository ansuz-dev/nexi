import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, getBlurData, getFormatUrl, getUrl} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import NexiLink from "../../items/links/NexiLink";
import {PartnerCardProps} from "./partnercardprops";

const PartnerCard001 = ({partner, classes}: PartnerCardProps): JSX.Element => {
  const name = getAttr(partner, "name") as string;
  const photo = getAttr(partner, "photo");
  const link = getAttr(partner, "link") as string || "";

  let photoUrl = getFormatUrl(photo, "medium") as string;
  if (!photo) {
    photoUrl = getUrl(photo) as string;
  }
  const thumbnailUrl = getBlurData(photo);

  const {
    rootClass,
    photoClass,
  } = useMemo(() => ({
    rootClass: cx(
      "partnercard001",
      "border border-neutral-100 overflow-hidden p-3 md:py-4 space-y-4",
      "hover:border-neutral-200",
      classes?.root,
    ),
    photoClass: cx(
      "sc-photo",
      "relative h-24 md:h-32",
      classes?.photo,
    ),
  }), [classes]);

  return (
    <NexiLink href={link}>
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
      </div>
    </NexiLink>
  );
};

export default React.memo(PartnerCard001);
