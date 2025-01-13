import React from 'react';
import { Text, List, ListItem } from '../atoms';

interface ClientListProps {
  title: string;
  clients: string[];
}

export const ClientList: React.FC<ClientListProps> = ({ title, clients }) => {
  return (
    <div>
      <Text variant="h3">{title}</Text>
      <List>
        {clients.map((client, index) => (
          <ListItem key={index}>{client}</ListItem>
        ))}
      </List>
    </div>
  );
};
