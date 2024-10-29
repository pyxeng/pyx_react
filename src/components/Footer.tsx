import React from 'react';
import { Plane } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Plane className="text-amber-500 h-6 w-6" />
            <span className="font-bold">AeroTech</span>
          </div>
          <div className="text-sm text-emerald-100">
            © 2024 AeroTech. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}