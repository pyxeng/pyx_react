import React from 'react';

const showcaseItems = [
  {
    title: 'Advanced Turbine Design',
    description: 'Innovative turbine design for enhanced efficiency and performance.',
    image: 'https://placekitten.com/300/200',
  },
  {
    title: 'Navigation Systems',
    description: 'Cutting-edge navigation systems for precise and reliable flight.',
    image: 'https://placekitten.com/301/200',
  },
  {
    title: 'Aerodynamic Research',
    description: 'Research and development in aerodynamics for improved flight dynamics.',
    image: 'https://placekitten.com/302/200',
  },
  {
    title: 'Material Science',
    description: 'Advanced material science for durable and lightweight aircraft components.',
    image: 'https://placekitten.com/303/200',
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
