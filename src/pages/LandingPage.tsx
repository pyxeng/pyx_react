import React from 'react';
import { CompanyInfo } from '../components/molecules/CompanyInfo';
import { ServicesSection } from '../components/organisms/ServicesSection';
import { AreasOfExpertise } from '../data/areasOfExpertise';
import { ProjectSection } from '../components/organisms/ProjectSection';
import { AdditionalServices } from '../components/organisms/AdditionalServices';
import { ClientSection } from '../components/organisms/ClientSection';

interface LandingPageProps {
  companyInfo: {
    nome: string;
    data_de_criacao: string;
    cnpj: string;
    website: string;
    endereco: string;
  };
  services: {
    area: string;
    descricao: string;
  }[];
    aeronauticaProjects: {
    tipo: string | null;
    empresas?: {
      nome: string | null;
      localizacao: string | null;
      cargo: string | null;
      periodo: string | null;
      atividades: string | null;
    }[];
    inspecoes_para_seguro?: {
        descricao: string | null;
        data: string | null;
        localizacao: string | null;
        empresa: string | null;
        imagem: string | null;
    }[];
    inspecoes_estruturais?: {
        descricao: string | null;
        data: string | null;
        localizacao: string | null;
        empresa: string | null;
        imagem: string | null;
    }[];
    inspecoes_acidente_aeronave?: {
        descricao: string | null;
        data: string | null;
        localizacao: string | null;
        empresa: string | null;
        imagem: string | null;
    }[];
    inspecoes_acidente_motor?: {
        descricao: string | null;
        data: string | null;
        localizacao: string | null;
        empresa: string | null;
        imagem: string | null;
    }[];
  }[];
  mecanicaProjects: {
    tipo: string | null;
    descricao: string | null;
    itens?: {
      descricao: string | null;
      data: string | null;
      localizacao: string | null;
      empresa: string | null;
      imagem: string | null;
    }[];
  }[];
  additionalServices: {
    area: string;
    descricao: string;
    atividades: string[];
  }[];
  clients: {
    empresas_aereas: string[];
    seguradoras: string[];
    reguladoras_e_periciadoras: string[];
    empresas_gerais: string[];
  };
}

export const LandingPage: React.FC<LandingPageProps> = ({
  companyInfo,
  services,
  aeronauticaProjects,
  mecanicaProjects,
  additionalServices,
  clients,
}) => {
  return (
    <div>
      <CompanyInfo {...companyInfo} />
      <ServicesSection services={services} />
      <h2>Areas of Expertise</h2>
      <ul>
        {AreasOfExpertise.map((area, index) => (
          <li key={index}>{area}</li>
        ))}
      </ul>
      <ProjectSection aeronautica={aeronauticaProjects} mecanica={mecanicaProjects} />
      <AdditionalServices services={additionalServices} />
      <ClientSection clients={clients} />
    </div>
  );
};
