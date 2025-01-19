import React, { useState } from 'react';

const tabs = [
  {
    id: 'tab1',
    title: 'Our Mission',
    content: 'To pioneer advancements in aerospace engineering, delivering innovative solutions that redefine the boundaries of flight and space exploration.',
  },
  {
    id: 'tab2',
    title: 'Our Vision',
    content: 'To be the leading force in aerospace technology, driving progress and inspiring future generations of engineers and scientists.',
  },
  {
    id: 'tab3',
    title: 'Our Values',
    content: 'We are committed to excellence, innovation, integrity, and collaboration, ensuring the highest standards of quality and performance in all our endeavors.',
  },
];

export default function TabView() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="bg-emerald-100 rounded-lg shadow-md">
      <div className="flex border-b border-emerald-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-6 font-semibold text-emerald-900 hover:bg-emerald-200 focus:outline-none ${
              activeTab === tab.id ? 'bg-emerald-200 border-b-2 border-amber-500' : ''
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="p-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
