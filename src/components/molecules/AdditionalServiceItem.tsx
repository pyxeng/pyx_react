import React from 'react';
import { Text, List, ListItem } from '../atoms';

interface AdditionalService {
  area: string;
  descricao: string;
  atividades: string[];
}

interface AdditionalServiceItemProps {
  service: AdditionalService;
}

export const AdditionalServiceItem: React.FC<AdditionalServiceItemProps> = ({ service }) => {
  return (
    <div>
      <Text variant="h3">{service.area}</Text>
      <Text>{service.descricao}</Text>
      <List>
        {service.atividades.map((atividade, i) => (
          <ListItem key={i}>{atividade}</ListItem>
        ))}
      </List>
    </div>
  );
};
