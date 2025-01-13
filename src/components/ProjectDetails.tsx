import React from 'react';
import { X, Calendar, Clock } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    image: string;
    date: string;
    time: string;
    [key: string]: any;
  } | null;
  onClose: () => void;
}

export default function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
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
