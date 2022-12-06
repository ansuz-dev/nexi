import React from "react";
import Link from "next/link";
import {isAbsoluteURL} from "../../../utils";

export interface NexiLinkProps {
  href?: string;
  children: React.ReactNode;
}

const NexiLink = ({href, children, ...rest}: NexiLinkProps): JSX.Element => {
  if (!href) {
    return (<a {...rest}>{children}</a>);
  }

  return isAbsoluteURL(href)
    ? (
      <a href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    )
    : (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
};

NexiLink.defaultProps = {href: ""};

export default NexiLink;
