import React from 'react';

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
      <h2>Engenharia Aeronáutica</h2>
      {aeronautica.map((project, index) => (
        <div key={index}>
          <h3>{project.tipo}</h3>
          {project.empresas && (
            <ul>
              {project.empresas.map((empresa, i) => (
                <li key={i}>
                  <p><strong>Nome:</strong> {empresa.nome}</p>
                  <p><strong>Localização:</strong> {empresa.localizacao}</p>
                  <p><strong>Cargo:</strong> {empresa.cargo}</p>
                  <p><strong>Período:</strong> {empresa.periodo}</p>
                  <p><strong>Atividades:</strong> {empresa.atividades}</p>
                </li>
              ))}
            </ul>
          )}
          {project.inspecoes_para_seguro && (
            <ul>
              {project.inspecoes_para_seguro.map((inspecao, i) => (
                <li key={i}>
                  <p><strong>Descrição:</strong> {inspecao.descricao}</p>
                  <p><strong>Data:</strong> {inspecao.data}</p>
                  <p><strong>Localização:</strong> {inspecao.localizacao}</p>
                  <p><strong>Empresa:</strong> {inspecao.empresa}</p>
                </li>
              ))}
            </ul>
          )}
          {project.inspecoes_estruturais && (
            <ul>
              {project.inspecoes_estruturais.map((inspecao, i) => (
                <li key={i}>
                  <p><strong>Descrição:</strong> {inspecao.descricao}</p>
                  <p><strong>Data:</strong> {inspecao.data}</p>
                  <p><strong>Localização:</strong> {inspecao.localizacao}</p>
                  <p><strong>Empresa:</strong> {inspecao.empresa}</p>
                </li>
              ))}
            </ul>
          )}
          {project.inspecoes_acidente_aeronave && (
            <ul>
              {project.inspecoes_acidente_aeronave.map((inspecao, i) => (
                <li key={i}>
                  <p><strong>Descrição:</strong> {inspecao.descricao}</p>
                  <p><strong>Data:</strong> {inspecao.data}</p>
                  <p><strong>Localização:</strong> {inspecao.localizacao}</p>
                  <p><strong>Empresa:</strong> {inspecao.empresa}</p>
                </li>
              ))}
            </ul>
          )}
          {project.inspecoes_acidente_motor && (
            <ul>
              {project.inspecoes_acidente_motor.map((inspecao, i) => (
                <li key={i}>
                  <p><strong>Descrição:</strong> {inspecao.descricao}</p>
                  <p><strong>Data:</strong> {inspecao.data}</p>
                  <p><strong>Localização:</strong> {inspecao.localizacao}</p>
                  <p><strong>Empresa:</strong> {inspecao.empresa}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <h2>Engenharia Mecânica</h2>
      {mecanica.map((project, index) => (
        <div key={index}>
          <h3>{project.tipo}</h3>
          <p>{project.descricao}</p>
          {project.itens && (
            <ul>
              {project.itens.map((item, i) => (
                <li key={i}>
                  <p><strong>Descrição:</strong> {item.descricao}</p>
                  <p><strong>Data:</strong> {item.data}</p>
                  <p><strong>Localização:</strong> {item.localizacao}</p>
                  <p><strong>Empresa:</strong> {item.empresa}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
