import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  isLoaded: boolean;
  scrollToSection: (section: string) => void;
}

export default function Hero({ isLoaded, scrollToSection }: HeroProps) {
  return (
    <section
      id="inicio"
      className={`min-h-screen flex items-center justify-center bg-cover bg-center transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(6, 78, 59, 0.8), rgba(6, 78, 59, 0.8)), url("https://images.unsplash.com/photo-1559297434-fae8a1916a79?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="container mx-auto px-4 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Engenharia Aeronáutica de Excelência
          </h1>
          <p className="text-xl text-emerald-100 mb-8">
            Inovação e precisão em cada projeto aeroespacial
          </p>
          <button
            onClick={() => scrollToSection('projetos')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full inline-flex items-center space-x-2 transition-all transform hover:scale-105"
          >
            <span>Conheça Nossos Projetos</span>
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
