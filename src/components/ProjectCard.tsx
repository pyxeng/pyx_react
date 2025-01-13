import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    link: string;
    [key: string]: any;
  };
  onSelect: () => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onClick={onSelect}
    >
      <div className="h-48 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-emerald-900 mb-2">{project.title}</h3>
        <p className="text-emerald-700 mb-4">{project.description}</p>
        <p
          className="inline-flex items-center text-amber-500 hover:text-amber-600"
        >
          Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
        </p>
      </div>
    </div>
  );
}
