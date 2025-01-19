import React, { useState } from 'react';

const tabs = [
  {
    id: 'tab1',
    title: 'Our Mission',
    content: 'To provide cutting-edge aerospace engineering solutions that drive innovation and excellence in the industry.',
  },
  {
    id: 'tab2',
    title: 'Our Vision',
    content: 'To be a global leader in aerospace engineering, known for our expertise, reliability, and commitment to quality.',
  },
  {
    id: 'tab3',
    title: 'Our Values',
    content: 'Innovation, Integrity, Excellence, Collaboration, and Customer Satisfaction are at the core of everything we do.',
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
