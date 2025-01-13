import React from 'react';
import { Text } from '../atoms/Text';
import { ListItem } from '../molecules/ListItem';
import { Section } from '../molecules/Section';

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

interface ProjetoAeronautica {
  tipo: string | null;
  empresas?: Empresa[];
  inspecoes_para_seguro?: InspecoesSeguro[];
  inspecoes_estruturais?: InspecoesEstruturais[];
  inspecoes_acidente_aeronave?: InspecoesAcidenteAeronave[];
  inspecoes_acidente_motor?: InspecoesAcidenteMotor[];
}

interface ProjetoMecanica {
  tipo: string | null;
  descricao: string | null;
  itens?: Item[];
}

interface ProjectListsProps {
  aeronautica: ProjetoAeronautica[];
  mecanica: ProjetoMecanica[];
}

export const ProjectLists: React.FC<ProjectListsProps> = ({ aeronautica, mecanica }) => {
  return (
    <div>
      <Section title="Engenharia Aeronáutica">
      {aeronautica.map((project, index) => (
        <div key={index}>
          <Text variant="h3">{project.tipo}</Text>
          {project.empresas && (
            <ul>
              {project.empresas.map((empresa, i) => (
                <ListItem key={i}>
                  <Text><strong>Nome:</strong> {empresa.nome}</Text>
                  <Text><strong>Localização:</strong> {empresa.localizacao}</Text>
                  <Text><strong>Cargo:</strong> {empresa.cargo}</Text>
                  <Text><strong>Período:</strong> {empresa.periodo}</Text>
                  <Text><strong>Atividades:</strong> {empresa.atividades}</Text>
                </ListItem>
              ))}
            </ul>
          )}
          {project.inspecoes_para_seguro && (
            <ul>
              {project.inspecoes_para_seguro.map((inspecao, i) => (
                <ListItem key={i}>
                  <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
                  <Text><strong>Data:</strong> {inspecao.data}</Text>
                  <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
                  <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
                </ListItem>
              ))}
            </ul>
          )}
          {project.inspecoes_estruturais && (
            <ul>
              {project.inspecoes_estruturais.map((inspecao, i) => (
                <ListItem key={i}>
                  <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
                  <Text><strong>Data:</strong> {inspecao.data}</Text>
                  <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
                  <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
                </ListItem>
              ))}
            </ul>
          )}
          {project.inspecoes_acidente_aeronave && (
            <ul>
              {project.inspecoes_acidente_aeronave.map((inspecao, i) => (
                <ListItem key={i}>
                  <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
                  <Text><strong>Data:</strong> {inspecao.data}</Text>
                  <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
                  <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
                </ListItem>
              ))}
            </ul>
          )}
          {project.inspecoes_acidente_motor && (
            <ul>
              {project.inspecoes_acidente_motor.map((inspecao, i) => (
                <ListItem key={i}>
                  <Text><strong>Descrição:</strong> {inspecao.descricao}</Text>
                  <Text><strong>Data:</strong> {inspecao.data}</Text>
                  <Text><strong>Localização:</strong> {inspecao.localizacao}</Text>
                  <Text><strong>Empresa:</strong> {inspecao.empresa}</Text>
                </ListItem>
              ))}
            </ul>
          )}
        </div>
      ))}
      </Section>

      <Section title="Engenharia Mecânica">
      {mecanica.map((project, index) => (
        <div key={index}>
          <Text variant="h3">{project.tipo}</Text>
          <Text>{project.descricao}</Text>
          {project.itens && (
            <ul>
              {project.itens.map((item, i) => (
                <ListItem key={i}>
                  <Text><strong>Descrição:</strong> {item.descricao}</Text>
                  <Text><strong>Data:</strong> {item.data}</Text>
                  <Text><strong>Localização:</strong> {item.localizacao}</Text>
                  <Text><strong>Empresa:</strong> {item.empresa}</Text>
                </ListItem>
              ))}
            </ul>
          )}
        </div>
      ))}
      </Section>
    </div>
  );
};
