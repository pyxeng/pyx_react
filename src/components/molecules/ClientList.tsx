import React from 'react';
import { Text } from 'src/components/atoms';
import { List, ListItem } from 'src/components/List';

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
