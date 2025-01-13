import React from 'react';
import { ServiceItem } from '../molecules/ServiceItem';

interface Service {
  area: string;
  descricao: string;
}

interface ServicesSectionProps {
  services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <ServiceItem key={index} area={service.area} descricao={service.descricao} />
      ))}
    </div>
  );
};
