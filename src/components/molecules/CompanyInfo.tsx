import React from 'react';
import { Text, Link } from '../atoms';

interface CompanyInfoProps {
  nome: string;
  data_de_criacao: string;
  cnpj: string;
  website: string;
  endereco: string;
}

export const CompanyInfo: React.FC<CompanyInfoProps> = ({
  nome,
  data_de_criacao,
  cnpj,
  website,
  endereco,
}) => {
  return (
    <div>
      <Text variant="h2">{nome}</Text>
      <Text>Creation Date: {data_de_criacao}</Text>
      <Text>CNPJ: {cnpj}</Text>
      <Text>
        Website: <Link href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</Link>
      </Text>
      <Text>Address: {endereco}</Text>
    </div>
  );
};
