import React from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import {getAttr, getFormatUrl, getUrl} from "../../../utils";
import Button from "../../items/buttons/Button";
import {NavbarProps} from "./navbarprops";

const Navbar001 = ({data, classes, active}: NavbarProps): JSX.Element => {
  const links = getAttr(data, "links") as Array<unknown>;
  const rightLinks = getAttr(data, "rightLinks") as Array<unknown>;

  const logo = getAttr(data, "logo");
  const logoUrl = getUrl(logo) as string;
  const thumbnailUrl = getFormatUrl(logo, "thumbnail") as string;

  const rootClass = cx(
    "nav001",
    "py-3 bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    classes?.root,
  );
  const containerClass = cx(
    "navbar-container",
    "container flex justify-between items-center mx-auto",
    classes?.container,
  );
  const logoClass = cx(
    "navbar-logo",
    "relative w-20 h-16",
    classes?.logo,
  );
  const linksClass = cx(
    "navbar-links",
    "flex space-x-8",
    classes?.links,
  );
  const rightLinksClass = cx(
    "navbar-rightlinks",
    "flex",
    classes?.rightLinks,
  );

  return (
    <nav className={rootClass}>
      <div className={containerClass}>
        <div className={logoClass}>
          {
            Boolean(logoUrl) && (
              <Image
                fill
                unoptimized
                alt="logo"
                src={logoUrl}
                draggable={false}
                loading="lazy"
                placeholder="blur"
                blurDataURL={thumbnailUrl}
                style={{objectFit: "contain", objectPosition: "left"}}
              />
            )
          }
        </div>
        {
          Boolean(links) && (
            <ul className={linksClass}>
              {
                links.map((item, index) => {
                  const link = getAttr(item, "link") as string;
                  const linkClass = cx(
                    "p-1 text-base leading-normal tracking-[0.5px]",
                    {"font-bold text-primary-500": link === active},
                  );

                  return (
                    <Link
                      key={index}
                      href={link}
                    >
                      <li className={linkClass}>
                        {getAttr(item, "title") as string}
                      </li>
                    </Link>
                  );
                })
              }
            </ul>
          )
        }
        {
          Boolean(rightLinks) && (
            <ul className={rightLinksClass}>
              {
                rightLinks.map((item, index) => (
                  <Button
                    key={index}
                    link
                    layout="btn001"
                    type="outlined"
                    label={getAttr(item, "title") as string}
                    href={getAttr(item, "link") as string}
                  />
                ))
              }
            </ul>
          )
        }
      </div>
    </nav>
  );
};

Navbar001.propTypes = {};

export default React.memo(Navbar001);
