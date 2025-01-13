import React, { useState, useEffect } from 'react';
    import Header from './components/Header';
    import Hero from './components/Hero';
    import ProjectCard from './components/ProjectCard';
    import AboutSection from './components/AboutSection';
    import ContactForm from './components/ContactForm';
    import Footer from './components/Footer';
    import ProjectDetails from './components/ProjectDetails';
    import Pagination from './components/Pagination';
    import { projects } from './data/projects';

    function App() {
      const [activeSection, setActiveSection] = useState('inicio');
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isLoaded, setIsLoaded] = useState(false);
      const [selectedProject, setSelectedProject] = useState(null);
      const [currentPage, setCurrentPage] = useState(1);
      const projectsPerPage = 6;

      useEffect(() => {
        console.log('App component mounted');
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

      const indexOfLastProject = currentPage * projectsPerPage;
      const indexOfFirstProject = indexOfLastProject - projectsPerPage;
      const currentProjects = projects.slice(
        indexOfFirstProject,
        indexOfLastProject
      );

      const totalPages = Math.ceil(projects.length / projectsPerPage);

      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };

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
                {currentProjects.map((project, index) => (
                  <ProjectCard
                    key={index}
                    {...project}
                    onSelect={() => handleProjectSelect(project)}
                  />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          </section>

          <AboutSection />

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
