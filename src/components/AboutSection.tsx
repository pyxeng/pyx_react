import React from 'react';
import { Settings2, Users, Plane } from 'lucide-react';

export default function AboutSection() {
  const features = [
    {
      icon: Settings2,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais recentes inovações em engenharia aeroespacial',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados e experientes',
    },
    {
      icon: Plane,
      title: 'Projetos Inovadores',
      description: 'Soluções personalizadas para cada desafio',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-emerald-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Sobre Nós</h2>
          <p className="text-emerald-100 mb-8 leading-relaxed">
            Com mais de duas décadas de experiência em engenharia aeronáutica,
            nossa equipe combina expertise técnica com inovação constante.
            Desenvolvemos soluções que definem o futuro da aviação.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-emerald-800/50 p-6 rounded-lg">
                  <Icon className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-emerald-100">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}