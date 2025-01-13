import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export const Link: React.FC<LinkProps> = ({ to, href, children, className, target, rel }) => {
  if (to) {
    return <RouterLink to={to} className={className}>{children}</RouterLink>;
  }
  return (
    <a href={href} className={className} target={target} rel={rel}>
      {children}
    </a>
  );
};
