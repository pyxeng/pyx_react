import React from 'react';
import { AdditionalServiceItem } from '../molecules/AdditionalServiceItem';

interface AdditionalService {
  area: string;
  descricao: string;
  atividades: string[];
}

interface AdditionalServicesProps {
  services: AdditionalService[];
}

export const AdditionalServices: React.FC<AdditionalServicesProps> = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <AdditionalServiceItem key={index} service={service} />
      ))}
    </div>
  );
};
