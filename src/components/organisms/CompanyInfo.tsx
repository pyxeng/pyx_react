import React from 'react';
import { Text } from '../atoms/Text';
import { Card } from '../molecules/Card';

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
    <Card>
      <Text variant="h2">{nome}</Text>
      <Text>Creation Date: {data_de_criacao}</Text>
      <Text>CNPJ: {cnpj}</Text>
      <Text>Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></Text>
      <Text>Address: {endereco}</Text>
    </Card>
  );
};
