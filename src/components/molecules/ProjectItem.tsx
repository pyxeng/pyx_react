import React from 'react';
import { Text, List, ListItem } from '../atoms';

interface Empresa {
  nome: string | null;
  localizacao: string | null;
  cargo: string | null;
  periodo: string | null;
  atividades: string | null;
}

interface InspecoesSeguro {
    descricao: string | null;
    data: string | null;
    localizacao: string | null;
    empresa: string | null;
    imagem: string | null;
}

interface InspecoesEstruturais {
    descricao: string | null;
    data: string | null;
    localizacao: string | null;
    empresa: string | null;
    imagem: string | null;
}

interface InspecoesAcidenteAeronave {
    descricao: string | null;
    data: string | null;
    localizacao: string | null;
    empresa: string | null;
    imagem: string | null;
}

interface InspecoesAcidenteMotor {
    descricao: string | null;
    data: string | null;
    localizacao: string | null;
    empresa: string | null;
    imagem: string | null;
}

interface Item {
  descricao: string | null;
  data: string | null;
  localizacao: string | null;
  empresa: string | null;
  imagem: string | null;
}

interface ProjectItemProps {
  tipo: string | null;
  empresas?: Empresa[];
  inspecoes_para_seguro?: InspecoesSeguro[];
  inspecoes_estruturais?: InspecoesEstruturais[];
  inspecoes_acidente_aeronave?: InspecoesAcidenteAeronave[];
  inspecoes_acidente_motor?: InspecoesAcidenteMotor[];
  descricao?: string | null;
  itens?: Item[];
}

export const ProjectItem: React.FC<ProjectItemProps> = ({
  tipo,
  empresas,
  inspecoes_para_seguro,
  inspecoes_estruturais,
  inspecoes_acidente_aeronave,
  inspecoes_acidente_motor,
  descricao,
  itens,
}) => {
  return (
    <div>
      <Text variant="h3">{tipo}</Text>
      {descricao && <Text>{descricao}</Text>}
      {empresas && (
        <List>
          {empresas.map((empresa, i) => (
            <ListItem key={i}>
              <Text><strong>Nome:</strong> {empresa.nome}</Text>
              <Text><strong>Localização:</strong> {empresa.localizacao}</Text>
              <Text><strong>Cargo:</strong> {empresa.cargo}</Text>
              <Text><strong>Período:</strong> {empresa.periodo}</Text>
              <Text><strong>Atividades:</strong> {empresa.atividades}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {inspecoes_para_seguro && (
        <List>
          {inspecoes_para_seguro.map((inspecao, i) => (
            <ListItem key={i}>
              <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
              <Text><strong>Data:</strong> {inspecao.data}</Text>
              <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
              <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {inspecoes_estruturais && (
        <List>
          {inspecoes_estruturais.map((inspecao, i) => (
            <ListItem key={i}>
              <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
              <Text><strong>Data:</strong> {inspecao.data}</Text>
              <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
              <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {inspecoes_acidente_aeronave && (
        <List>
          {inspecoes_acidente_aeronave.map((inspecao, i) => (
            <ListItem key={i}>
              <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
              <Text><strong>Data:</strong> {inspecao.data}</Text>
              <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
              <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {inspecoes_acidente_motor && (
        <List>
          {inspecoes_acidente_motor.map((inspecao, i) => (
            <ListItem key={i}>
              <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
              <Text><strong>Data:</strong> {inspecao.data}</Text>
              <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
              <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
            </ListItem>
          ))}
        </List>
      )}
      {itens && (
        <List>
          {itens.map((item, i) => (
            <ListItem key={i}>
              <Text><strong>Descrição:</strong> {item.descricao}</Text>
              <Text><strong>Data:</strong> {item.data}</Text>
              <Text><strong>Localização:</strong> {item.localizacao}</Text>
              <Text><strong>Empresa:</strong> {item.empresa}</Text>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};
