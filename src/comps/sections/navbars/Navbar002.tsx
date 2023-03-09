import React, {useCallback, useMemo, useState} from "react";
import cx from "classnames";
import Link from "next/link";
import {getAttr, getBlurData, getUrl} from "../../../utils";
import GhostImage from "../../items/images/GhostImage";
import ButtonGroup from "../../items/buttons/ButtonGroup";
import {NavbarProps} from "./navbarprops";

const Navbar002 = ({data, classes, active}: NavbarProps): JSX.Element => {
  const links = getAttr(data, "links") as Array<unknown>;
  const rightLinks = getAttr(data, "rightLinks") as Array<unknown>;

  const logo = getAttr(data, "logo");
  const logoUrl = getUrl(logo) as string;
  const thumbnailUrl = getBlurData(logo);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(v => !v);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const {
    rootClass,
    containerClass,
    logoClass,
    linksClass,
    rightLinksClass,
  } = useMemo(() => ({
    rootClass: cx(
      "nav002",
      "bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
      classes?.root,
    ),
    containerClass: cx(
      "navbar-container",
      "container flex justify-between items-center mx-auto py-2",
      classes?.container,
    ),
    logoClass: cx(
      "navbar-logo",
      "relative w-32 h-20 md:h-28",
      classes?.logo,
    ),
    linksClass: cx(
      "navbar-links",
      "hidden lg:flex space-x-8",
      classes?.links,
    ),
    rightLinksClass: cx(
      "navbar-rightlinks",
      "hidden md:flex",
      classes?.rightLinks,
    ),
  }), [classes]);

  const menuClass = useMemo(() => cx(
    "navbar-menu",
    "lg:hidden bg-white w-full overflow-hidden transition-[max-height] duration-300 shadow-[inset_0_2px_2px_rgba(0,0,0,0.25)]",
    {
      "max-h-[1000px]": isOpen,
      "max-h-0": !isOpen,
    },
  ), [isOpen]);

  const navLinks = useMemo(() => Boolean(links) && (
    <ul className={linksClass}>
      {
        links.map((item, index) => {
          const link = getAttr(item, "link") as string;
          const linkClass = cx(
            "p-1 text-base leading-normal tracking-[0.5px]",
            {"font-semibold text-primary-500": link === active},
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
  ), [active, links, linksClass]);

  const menuLinks = useMemo(() => Boolean(links) && (
    <ul>
      {
        links.map((item, index) => {
          const link = getAttr(item, "link") as string;
          const linkClass = cx(
            "text-sm leading-normal tracking-[0.25px] p-4",
            {"font-semibold text-primary-500": link === active},
          );

          return (
            <Link
              key={index}
              href={link}
              onClick={closeMenu}
            >
              <li className={linkClass}>
                {getAttr(item, "title") as string}
              </li>
            </Link>
          );
        })
      }
    </ul>
  ), [active, closeMenu, links]);

  return (
    <nav className={rootClass}>
      <div className={containerClass}>
        <div className="flex items-center">
          <div className="lg:hidden mr-4" onClick={toggleMenu}>
            <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
              <g>
                {
                  isOpen ? (
                    <path d="M7.46665 22.1667L5.83331 20.5334L12.3666 14L5.83331 7.46671L7.46665 5.83337L14 12.3667L20.5333 5.83337L22.1666 7.46671L15.6333 14L22.1666 20.5334L20.5333 22.1667L14 15.6334L7.46665 22.1667Z" />
                  ) : (
                    <path d="M3.5 21V18.6667H24.5V21H3.5ZM3.5 15.1667V12.8333H24.5V15.1667H3.5ZM3.5 9.33333V7H24.5V9.33333H3.5Z" />
                  )
                }
              </g>
            </svg>
          </div>
          <Link href="/">
            <GhostImage
              className={logoClass}
              priority
              layout="fill"
              alt="logo"
              src={logoUrl}
              placeholder="blur"
              blurDataURL={thumbnailUrl}
              objectFit="contain"
              objectPosition="left center"
            />
          </Link>
        </div>
        {navLinks}
        <ButtonGroup
          className={rightLinksClass}
          buttons={rightLinks}
        />
      </div>
      <div className={menuClass}>
        <div className="container mx-auto">
          {menuLinks}
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar002);
