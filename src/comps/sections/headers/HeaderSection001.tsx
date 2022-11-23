import React from "react";
import cx from "classnames";
import Image from "next/image";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import Button from "../../items/buttons/Button";
import {HeaderSectionProps} from "./headersectionprops";

const HeaderSection001 = ({data, classes}: HeaderSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const links = getAttr(data, "links") as Array<unknown> | undefined;
  const photos = getAttr(data, "photos", "data") as Array<unknown> | undefined;
  const photo = photos?.[0];
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "headersection-001",
    "relative py-40",
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container text-center",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug text-center text-white",
    classes?.title,
  );
  const subtitleClass = cx(
    "section-subtitle",
    "text-xl font-medium leading-normal tracking-[0.15px] text-white",
    classes?.subtitle,
  );
  const linksClass = cx(
    "section-links",
    "flex justify-center space-x-2",
    classes?.links,
  );

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-4 col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className={titleClass}>{title}</h3>
              <h6 className={subtitleClass}>{subtitle}</h6>
            </div>
            <div className={linksClass}>
              {links?.map((link, index) => (
                <Button
                  key={index}
                  link
                  size="large"
                  href={getAttr(link, "link") as string}
                  label={getAttr(link, "title") as string}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <div className="relative w-full h-full">
          {
            Boolean(photoUrl) && (
              <Image
                fill
                unoptimized
                alt={title}
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
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{background: "linear-gradient(0deg, rgba(17, 17, 17, 0.2), rgba(17, 17, 17, 0.2))"}}
      />
    </section>
  );
};

HeaderSection001.propTypes = {};

export default React.memo(HeaderSection001);
