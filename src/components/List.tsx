import React from 'react';

interface ListProps {
  children: React.ReactNode;
  variant?: 'ul' | 'ol';
  className?: string;
}

export const List: React.FC<ListProps> = ({ children, variant = 'ul', className }) => {
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
};
