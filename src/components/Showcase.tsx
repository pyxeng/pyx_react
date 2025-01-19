import React from 'react';

const showcaseItems = [
  {
    title: 'Advanced Turbine Design',
    description: 'Innovative turbine design for enhanced efficiency and performance.',
    image: 'https://images.unsplash.com/photo-1614037288848-691271118494?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Navigation Systems',
    description: 'Cutting-edge navigation systems for precise and reliable flight.',
    image: 'https://images.unsplash.com/photo-1581092917485-144416808341?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Aerodynamic Research',
    description: 'Research and development in aerodynamics for improved flight dynamics.',
    image: 'https://images.unsplash.com/photo-1551882547-192269101987?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Material Science',
    description: 'Advanced material science for durable and lightweight aircraft components.',
    image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function Showcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {showcaseItems.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
