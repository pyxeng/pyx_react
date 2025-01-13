import React from 'react';
import { Text } from 'src/components/atoms';
import { ListItem } from 'src/components/molecules/ListItem';
import { Section } from 'src/components/molecules/Section';
import { List } from 'src/components/List';

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
      <List>
        {services.map((service, index) => (
          <ListItem key={index}>
            <Text variant="h3">{service.area}</Text>
            <Text>{service.descricao}</Text>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};
