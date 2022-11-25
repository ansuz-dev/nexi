import React from "react";
import cx from "classnames";
import Image from "next/legacy/image";
import {getAttr, getFormatUrl, getUrl, isGray} from "../../../utils";
import {QuoteSectionProps} from "./quotesectionprops";

const QuoteSection001 = ({data, classes}: QuoteSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const background = getAttr(data, "background") as string;
  const quotes = getAttr(data, "quotes") as Array<unknown>;

  const photo = getAttr(data, "photo");
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const rootClass = cx(
    "qs001",
    {"bg-neutral-50": isGray(background)},
    classes?.root,
  );
  const containerClass = cx(
    "section-container",
    "container py-28 space-y-6",
    classes?.container,
  );
  const titleClass = cx(
    "section-title",
    "text-5xl leading-snug text-primary-600",
    classes?.title,
  );
  const subtitleClass = cx(
    "section-subtitle",
    "text-5xl font-normal leading-snug",
    classes?.subtitle,
  );

  return (
    <section className={rootClass}>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-start-2 col-span-7">
          <div className={containerClass}>
            <div>
              <h3 className={titleClass}>{title}</h3>
              <h6 className={subtitleClass}>{subtitle}</h6>
            </div>
            {Boolean(quotes) && (
              <div>
                {quotes.map((quote, index) => (
                  <div key={index} className="space-y-6">
                    <p className="text-base leading-normal tracking-[0.5px]">
                      “{getAttr(quote, "quote") as string}”
                    </p>
                    <p className="text-base leading-normal font-bold tracking-[0.5px] text-right">
                      - {getAttr(quote, "person") as string}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3">
          <div className="relative w-full h-full">
            <Image
              layout="fill"
              unoptimized
              alt="person"
              src={photoUrl}
              draggable={false}
              unselectable="on"
              loading="lazy"
              placeholder="blur"
              blurDataURL={thumbnailUrl}
              objectFit="contain"
              objectPosition="center bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

QuoteSection001.propTypes = {};

export default React.memo(QuoteSection001);
