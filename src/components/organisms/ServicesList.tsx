import React from 'react';
import { Text } from '../atoms/Text';
import { ListItem } from '../molecules/ListItem';
import { Section } from '../molecules/Section';

interface Service {
  area: string;
  descricao: string;
}

interface ServicesListProps {
  services: Service[];
}

export const ServicesList: React.FC<ServicesListProps> = ({ services }) => {
  return (
    <Section title="Services Offered">
      <ul>
        {services.map((service, index) => (
          <ListItem key={index}>
            <Text variant="h3">{service.area}</Text>
            <Text>{service.descricao}</Text>
          </ListItem>
        ))}
      </ul>
    </Section>
  );
};
