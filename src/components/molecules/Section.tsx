import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, title, className }) => {
  return (
    <section className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
