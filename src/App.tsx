import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import Testimonials from './components/Testimonials';
import PartnersCarousel from './components/PartnersCarousel';
import TabView from './components/TabView';
import Showcase from './components/Showcase';
import Slider from './components/Slider';
import Portfolio from './components/Portfolio';

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const projects = [
    {
      title: 'Desenvolvimento de Turbinas',
      description:
        'Projeto inovador de turbinas de alta eficiência para aeronaves comerciais.',
      image:
        'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80',
      link: '#',
      date: '2024-07-15',
      time: '14:00',
    },
    {
      title: 'Sistemas de Navegação',
      description: 'Sistemas avançados de navegação com tecnologia de ponta.',
      image:
        'https://images.unsplash.com/photo-1530973428-5bf2db2e4d71?auto=format&fit=crop&q=80',
      link: '#',
      date: '2024-08-01',
      time: '10:00',
    },
    {
      title: 'Aerodinâmica Avançada',
      description:
        'Pesquisa e desenvolvimento em aerodinâmica para maior eficiência.',
      image:
        'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80',
      link: '#',
      date: '2024-09-10',
      time: '16:00',
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50">
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <Hero isLoaded={isLoaded} scrollToSection={scrollToSection} />

      <section id="projetos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Nossos Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onSelect={() => handleProjectSelect(project)}
              />
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <section id="showcase" className="py-20 bg-emerald-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Showcase
          </h2>
          <Showcase />
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Testimonials
          </h2>
          <Testimonials />
        </div>
      </section>

      <section id="partners" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Our Partners
          </h2>
          <PartnersCarousel />
        </div>
      </section>

      <section id="tabview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Tab View
          </h2>
          <TabView />
        </div>
      </section>

      <section id="slider" className="py-20 bg-emerald-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Slider
          </h2>
          <Slider />
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
            Portfolio
          </h2>
          <Portfolio />
        </div>
      </section>

      <section id="contato" className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
              Entre em Contato
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <ProjectDetails project={selectedProject} onClose={handleCloseDetails} />
    </div>
  );
}

export default App;
