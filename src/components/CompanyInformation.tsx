import React from 'react';

interface CompanyInfoProps {
  nome: string;
  data_de_criacao: string;
  cnpj: string;
  website: string;
  endereco: string;
}

export const CompanyInformation: React.FC<CompanyInfoProps> = ({
  nome,
  data_de_criacao,
  cnpj,
  website,
  endereco,
}) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Creation Date: {data_de_criacao}</p>
      <p>CNPJ: {cnpj}</p>
      <p>Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
      <p>Address: {endereco}</p>
    </div>
  );
};
