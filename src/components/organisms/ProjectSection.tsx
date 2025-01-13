import React from 'react';
import { ProjectItem } from '../molecules/ProjectItem';

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

interface ProjectSectionProps {
  aeronautica: ProjetoAeronautica[];
  mecanica: ProjetoMecanica[];
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ aeronautica, mecanica }) => {
  return (
    <div>
      <h2>Engenharia Aeronáutica</h2>
      {aeronautica.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}

      <h2>Engenharia Mecânica</h2>
      {mecanica.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};
