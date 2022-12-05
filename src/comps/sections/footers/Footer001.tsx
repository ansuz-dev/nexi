import React, {useMemo} from "react";
import cx from "classnames";
import Link from "next/link";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import ContactItem, {ContactItemProps} from "../../items/common/ContactItem";
import SocialsItem from "../../items/common/SocialsItem";
import GhostImage from "../../items/images/GhostImage";
import {FooterProps} from "./footerprops";

const Footer001 = ({data, classes}: FooterProps): JSX.Element => {
  const addresses = getAttr(data, "addresses") as Array<unknown>;
  const contacts = getAttr(data, "contacts") as Array<ContactItemProps>;
  const socialLinks = getAttr(data, "socialLinks") as Array<unknown>;
  const links = getAttr(data, "links") as Array<unknown>;
  const copyright = getAttr(data, "copyright") as string;

  const logo = getAttr(data, "logo");
  const logoUrl = getUrl(logo) as string;
  const thumbnailUrl = getFormatUrl(logo, "thumbnail") as string;

  const photo = getAttr(data, "photo");
  const photoUrl = getUrl(photo) as string;

  const {
    rootClass,
    containerClass,
    logoClass,
    linksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "footer001",
      "py-8 bg-neutral-100 overflow-hidden",
      classes?.root,
    ),
    containerClass: cx(
      "footer-container",
      "container mx-auto space-y-8 text-center lg:text-left",
      classes?.container,
    ),
    logoClass: cx(
      "footer-logo",
      "relative w-full h-36",
      classes?.logo,
    ),
    linksClass: cx(
      "footer-links",
      "flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:divide-x divide-gray-300",
      classes?.links,
    ),
  }), [classes]);

  return (
    <nav className={rootClass}>
      <div className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="p-2">
            <GhostImage
              className={logoClass}
              layout="fill"
              alt="logo"
              src={logoUrl}
              loading="lazy"
              placeholder="blur"
              blurDataURL={thumbnailUrl}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
          <div className="space-y-6">
            {addresses.map((item, index) => (
              <div key={index} className="space-y-2">
                <label className="text-base font-semibold leading-normal tracking-[0.5px]">
                  {getAttr(item, "title") as string}
                </label>
                <p className="text-base leading-normal tracking-[0.5px] text-black-secondary">
                  {getAttr(item, "address") as string}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <label className="text-base font-semibold leading-normal tracking-[0.5px]">
              Contacts
            </label>
            {contacts.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
          <div className="relative space-y-4">
            <div className="space-y-2">
              <label className="text-base font-semibold leading-normal tracking-[0.5px]">
                Social links
              </label>
              <div>
                <SocialsItem {...socialLinks} />
              </div>
            </div>
            {Boolean(photoUrl) && (
              <div className="lg:absolute w-full h-56 lg:h-[500px]">
                <GhostImage
                  className="relative w-full h-full"
                  layout="fill"
                  alt="photo"
                  src={photoUrl}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={thumbnailUrl}
                  objectFit="contain"
                  objectPosition="top"
                />
              </div>
            )}
          </div>
        </div>
        <div className="space-y-4">
          {Boolean(links) && (
            <div className={linksClass}>
              {
                links.map(link => {
                  const href = getAttr(link, "link") as string;
                  return (
                    <Link className="text-sm px-2" key={href} href={href}>
                      {getAttr(link, "title") as string}
                    </Link>
                  );
                })
              }
            </div>
          )}
          <p className="text-xs leading-tight tracking-[0.4px] text-center">
            {copyright}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Footer001);
