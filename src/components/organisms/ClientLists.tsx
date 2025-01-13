import React from 'react';
import { Text } from '../atoms/Text';
import { ListItem } from '../molecules/ListItem';
import { Section } from '../molecules/Section';

interface ClientListsProps {
  clients: {
    empresas_aereas: string[];
    seguradoras: string[];
    reguladoras_e_periciadoras: string[];
    empresas_gerais: string[];
  };
}

export const ClientLists: React.FC<ClientListsProps> = ({ clients }) => {
  return (
    <Section title="Client Lists">
      <div>
        <Text variant="h3">Airlines</Text>
        <ul>
          {clients.empresas_aereas.map((client, index) => (
            <ListItem key={index}>{client}</ListItem>
          ))}
        </ul>
      </div>
      <div>
        <Text variant="h3">Insurance Companies</Text>
        <ul>
          {clients.seguradoras.map((client, index) => (
            <ListItem key={index}>{client}</ListItem>
          ))}
        </ul>
      </div>
      <div>
        <Text variant="h3">Regulators and Experts</Text>
        <ul>
          {clients.reguladoras_e_periciadoras.map((client, index) => (
            <ListItem key={index}>{client}</ListItem>
          ))}
        </ul>
      </div>
        <div>
        <Text variant="h3">General Companies</Text>
        <ul>
          {clients.empresas_gerais.map((client, index) => (
            <ListItem key={index}>{client}</ListItem>
          ))}
        </ul>
      </div>
    </Section>
  );
};
