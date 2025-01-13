import React from 'react';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
}

export const Text: React.FC<TextProps> = ({ children, variant = 'p', className }) => {
  const Tag = variant;
  return <Tag className={className}>{children}</Tag>;
};
