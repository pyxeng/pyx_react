import React, { useState } from 'react';

const portfolioItems = [
  {
    title: 'Project Alpha',
    description: 'A groundbreaking project in advanced aerodynamics, focusing on reducing drag and increasing lift.',
    image: 'https://images.unsplash.com/photo-1581092917485-144416808341?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['aerodynamics', 'research', 'innovation'],
  },
  {
    title: 'Project Beta',
    description: 'Development of high-efficiency turbine systems, aiming for reduced fuel consumption and increased power output.',
    image: 'https://images.unsplash.com/photo-1614037288848-691271118494?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['turbines', 'engineering', 'efficiency'],
  },
  {
    title: 'Project Gamma',
    description: 'Advanced navigation systems for commercial aviation, enhancing precision and safety in flight operations.',
    image: 'https://images.unsplash.com/photo-1551882547-192269101987?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['navigation', 'systems', 'technology'],
  },
  {
    title: 'Project Delta',
    description: 'Material science research for lightweight aircraft components, focusing on durability and performance.',
    image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['materials', 'science', 'research'],
  },
  {
    title: 'Project Epsilon',
    description: 'Exploration of new propulsion methods for space travel, aiming for faster and more efficient space missions.',
    image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['propulsion', 'space', 'exploration'],
  },
  {
    title: 'Project Zeta',
    description: 'Development of sustainable aviation fuel alternatives, reducing the environmental impact of air travel.',
    image: 'https://images.unsplash.com/photo-1551882547-192269101987?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['sustainability', 'fuel', 'aviation'],
  },
];

export default function Portfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {item.tags.map((tag) => (
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
        ))}
      </div>
    </div>
  );
}
