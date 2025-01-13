import React from 'react';

interface AdditionalService {
  area: string;
  descricao: string;
  atividades: string[];
}

interface AdditionalServicesProps {
  services: AdditionalService[];
}

export const AdditionalServicesSection: React.FC<AdditionalServicesProps> = ({ services }) => {
  return (
    <div>
      <h2>Additional Services</h2>
      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.area}</h3>
          <p>{service.descricao}</p>
          <ul>
            {service.atividades.map((atividade, i) => (
              <li key={i}>{atividade}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
