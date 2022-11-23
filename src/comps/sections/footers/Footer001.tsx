import React from "react";
import cx from "classnames";
import Image from "next/image";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import ContactItem, {ContactItemProps} from "../../items/common/ContactItem";
import SocialsItem from "../../items/common/SocialsItem";
import {FooterProps} from "./footerprops";

const Footer001 = ({data, classes}: FooterProps): JSX.Element => {
  const addresses = getAttr(data, "addresses") as Array<unknown>;
  const contacts = getAttr(data, "contacts") as Array<ContactItemProps>;
  const socialLinks = getAttr(data, "socialLinks") as Array<unknown>;
  const copyright = getAttr(data, "copyright") as string;

  const logo = getAttr(data, "logo");
  const logoUrl = getUrl(logo) as string;
  const thumbnailUrl = getFormatUrl(logo, "thumbnail") as string;

  const photo = getAttr(data, "photo");
  const photoUrl = getUrl(photo) as string;

  const rootClass = cx(
    "footer-001",
    "py-8 bg-neutral-100 overflow-hidden",
    classes?.root,
  );
  const containerClass = cx(
    "footer-container",
    "container mx-auto space-y-8 text-center lg:text-left",
    classes?.container,
  );
  const logoClass = cx(
    "footer-logo",
    "relative w-full h-36",
    classes?.logo,
  );
  const linksClass = cx(
    "footer-links",
    "flex space-x-8",
    classes?.links,
  );

  return (
    <nav className={rootClass}>
      <div className={containerClass}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="p-2">
            <div className={logoClass}>
              {Boolean(logoUrl) && (
                <Image
                  fill
                  unoptimized
                  alt="logo"
                  src={logoUrl}
                  draggable={false}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={thumbnailUrl}
                  className="object-contain object-center lg:object-left"
                />
              )}
            </div>
          </div>
          <div className="space-y-6">
            {addresses.map((item, index) => (
              <div key={index} className="space-y-2">
                <label className="text-base leading-normal font-bold tracking-[0.5px]">
                  {getAttr(item, "title") as string}
                </label>
                <p className="text-base leading-normal tracking-[0.5px] text-black-secondary">
                  {getAttr(item, "address") as string}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <label className="text-base leading-normal font-bold tracking-[0.5px]">
              Contacts
            </label>
            {contacts.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
          <div className="relative space-y-4">
            <div className="space-y-2">
              <label className="text-base leading-normal font-bold tracking-[0.5px]">
                Social links
              </label>
              <div>
                <SocialsItem {...socialLinks} />
              </div>
            </div>
            {Boolean(photoUrl) && (
              <div className="lg:absolute w-full h-56 lg:h-[500px]">
                <div className="relative w-full h-full">
                  <Image
                    fill
                    unoptimized
                    alt="photo"
                    src={photoUrl}
                    draggable={false}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={thumbnailUrl}
                    className="object-contain object-top"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="text-xs leading-tight tracking-[0.4px] text-center">
            {copyright}
          </p>
        </div>
      </div>
    </nav>
  );
};

Footer001.propTypes = {};

export default React.memo(Footer001);
