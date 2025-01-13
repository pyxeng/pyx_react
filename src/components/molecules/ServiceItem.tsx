import React from 'react';
import { Text } from '../atoms';

interface ServiceItemProps {
  area: string;
  descricao: string;
}

export const ServiceItem: React.FC<ServiceItemProps> = ({ area, descricao }) => {
  return (
    <div>
      <Text variant="h3">{area}</Text>
      <Text>{descricao}</Text>
    </div>
  );
};
