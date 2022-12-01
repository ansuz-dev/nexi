import React, {useMemo} from "react";
import cx from "classnames";
import {getAttr, getFormatUrl, getUrl, isGray} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import {QuoteSectionProps} from "./quotesectionprops";

const QuoteSection001 = ({data, classes}: QuoteSectionProps): JSX.Element => {
  const title = getAttr(data, "title") as string;
  const subtitle = getAttr(data, "subtitle") as string;
  const background = getAttr(data, "background") as string;
  const quotes = getAttr(data, "quotes") as Array<unknown>;

  const photo = getAttr(data, "photo");
  const photoUrl = getUrl(photo) as string;
  const thumbnailUrl = getFormatUrl(photo, "thumbnail") as string;

  const {
    rootClass,
    containerClass,
    titleClass,
    subtitleClass,
  } = useMemo(() => ({
    rootClass: cx(
      "qs001",
      {"bg-neutral-50": isGray(background)},
      classes?.root,
    ),
    containerClass: cx(
      "section-container",
      "container mx-auto",
      classes?.container,
    ),
    titleClass: cx(
      "section-title",
      "text-primary-600 text-center lg:text-left",
      "text-2xl font-normal leading-normal",
      "md:text-4xl md:font-normal md:leading-snug md:tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.title,
    ),
    subtitleClass: cx(
      "section-subtitle",
      "text-center lg:text-left",
      "text-2xl font-normal leading-normal",
      "md:text-4xl md:font-normal md:leading-snug md:tracking-[0.25px]",
      "lg:text-5xl lg:font-normal lg:leading-snug",
      classes?.subtitle,
    ),
  }), [background, classes]);

  return (
    <section className={rootClass}>
      <div className={containerClass}>
        <div className="grid lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-start-2 lg:col-span-7">
            <div className="py-8 lg:py-16 xl:py-24 space-y-6">
              <div>
                <h3 className={titleClass}>{title}</h3>
                <h6 className={subtitleClass}>{subtitle}</h6>
              </div>
              {Boolean(quotes) && (
                <div className="px-6">
                  {quotes.map((quote, index) => (
                    <div key={index} className="space-y-6">
                      <p className="text-base font-normal leading-normal tracking-[0.5px]">
                        “{getAttr(quote, "quote") as string}”
                      </p>
                      <p className="text-base font-semibold leading-normal tracking-[0.5px] text-right">
                        - {getAttr(quote, "person") as string}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="hidden lg:block col-span-3">
            <GhostImage
              className="relative w-full h-full"
              layout="fill"
              alt="person"
              src={photoUrl}
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

export default React.memo(QuoteSection001);
