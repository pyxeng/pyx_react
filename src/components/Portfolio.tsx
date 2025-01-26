import React, { useState } from 'react';
    import { X, Calendar, Clock } from 'lucide-react';

    const portfolioItems = [
      {
        title: 'Project Alpha',
        description: 'A groundbreaking project in advanced aerodynamics, focusing on reducing drag and increasing lift.',
        image: 'https://images.unsplash.com/photo-1581092917485-144416808341?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['aerodynamics', 'research', 'innovation'],
        date: '2024-07-15',
        time: '14:00',
      },
      {
        title: 'Project Beta',
        description: 'Development of high-efficiency turbine systems, aiming for reduced fuel consumption and increased power output.',
        image: 'https://images.unsplash.com/photo-1614037288848-691271118494?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['turbines', 'engineering', 'efficiency'],
        date: '2024-08-01',
        time: '10:00',
      },
      {
        title: 'Project Gamma',
        description: 'Advanced navigation systems for commercial aviation, enhancing precision and safety in flight operations.',
        image: 'https://images.unsplash.com/photo-1551882547-192269101987?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['navigation', 'systems', 'technology'],
        date: '2024-09-10',
        time: '16:00',
      },
      {
        title: 'Project Delta',
        description: 'Material science research for lightweight aircraft components, focusing on durability and performance.',
        image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['materials', 'science', 'research'],
        date: '2024-10-20',
        time: '11:00',
      },
      {
        title: 'Project Epsilon',
        description: 'Exploration of new propulsion methods for space travel, aiming for faster and more efficient space missions.',
        image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['propulsion', 'space', 'exploration'],
        date: '2024-11-05',
        time: '13:00',
      },
      {
        title: 'Project Zeta',
        description: 'Development of sustainable aviation fuel alternatives, reducing the environmental impact of air travel.',
        image: 'https://images.unsplash.com/photo-1551882547-192269101987?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tags: ['sustainability', 'fuel', 'aviation'],
        date: '2024-12-01',
        time: '09:00',
      },
    ];

    interface ProjectCardProps {
      title: string;
      description: string;
      image: string;
      tags: string[];
      date: string;
      time: string;
      onSelect: () => void;
    }

    function ProjectCard({ title, description, image, tags, date, time, onSelect }: ProjectCardProps) {
      return (
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          onClick={onSelect}
        >
          <img src={image} alt={title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-emerald-200 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      );
    }

    interface ProjectDetailsProps {
      project: {
        title: string;
        description: string;
        image: string;
        date: string;
        time: string;
      } | null;
      onClose: () => void;
    }

    function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
      if (!project) return null;

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full relative transform transition-all duration-300">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X />
            </button>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto rounded-lg mb-4"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                  {project.title}
                </h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{project.time}</span>
                </div>
                <p className="text-gray-700 mb-6">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default function Portfolio() {
      const [searchTerm, setSearchTerm] = useState('');
      const [selectedTags, setSelectedTags] = useState<string[]>([]);
      const [selectedProject, setSelectedProject] = useState(null);

      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
      };

      const handleTagClick = (tag: string) => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      };

      const handleProjectSelect = (project) => {
        setSelectedProject(project);
      };

      const handleCloseDetails = () => {
        setSelectedProject(null);
      };

      const filteredItems = portfolioItems.filter((item) => {
        const searchMatch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase());

        const tagMatch =
          selectedTags.length === 0 || item.tags.some((tag) => selectedTags.includes(tag));

        return searchMatch && tagMatch;
      });

      const allTags = [...new Set(portfolioItems.flatMap((item) => item.tags))];

      return (
        <div>
          <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-emerald-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-4 md:mb-0 md:mr-4 w-full md:w-auto"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-amber-500 text-white'
                      : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ProjectCard
                key={index}
                {...item}
                onSelect={() => handleProjectSelect(item)}
              />
            ))}
          </div>
          <ProjectDetails project={selectedProject} onClose={handleCloseDetails} />
        </div>
      );
    }
