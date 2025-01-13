import React from 'react';
import { ClientList } from '../molecules/ClientList';

interface ClientListsProps {
  clients: {
    empresas_aereas: string[];
    seguradoras: string[];
    reguladoras_e_periciadoras: string[];
    empresas_gerais: string[];
  };
}

export const ClientSection: React.FC<ClientListsProps> = ({ clients }) => {
  return (
    <div>
      <ClientList title="Airlines" clients={clients.empresas_aereas} />
      <ClientList title="Insurance Companies" clients={clients.seguradoras} />
      <ClientList title="Regulators and Experts" clients={clients.reguladoras_e_periciadoras} />
      <ClientList title="General Companies" clients={clients.empresas_gerais} />
    </div>
  );
};
