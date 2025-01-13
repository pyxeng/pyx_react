import React from 'react';

interface Service {
  area: string;
  descricao: string;
}

interface ServicesOfferedProps {
  services: Service[];
}

export const ServicesOffered: React.FC<ServicesOfferedProps> = ({ services }) => {
  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <h3>{service.area}</h3>
          <p>{service.descricao}</p>
        </div>
      ))}
    </div>
  );
};
