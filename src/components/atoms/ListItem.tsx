import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({ children, className }) => {
  return <li className={className}>{children}</li>;
};
