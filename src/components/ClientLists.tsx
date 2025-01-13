import React from 'react';

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
    <div>
      <h2>Client Lists</h2>
      <div>
        <h3>Airlines</h3>
        <ul>
          {clients.empresas_aereas.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Insurance Companies</h3>
        <ul>
          {clients.seguradoras.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Regulators and Experts</h3>
        <ul>
          {clients.reguladoras_e_periciadoras.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
        <div>
        <h3>General Companies</h3>
        <ul>
          {clients.empresas_gerais.map((client, index) => (
            <li key={index}>{client}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
