import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    text: 'AeroTech has been an invaluable partner in our aerospace projects. Their expertise and dedication are unmatched.',
    image: 'https://placekitten.com/100/100',
  },
  {
    name: 'Jane Smith',
    company: 'Global Aviation Corp.',
    text: 'We are consistently impressed with the innovative solutions and high-quality work provided by AeroTech. Highly recommended!',
    image: 'https://placekitten.com/101/101',
  },
  {
    name: 'Mike Brown',
    company: 'Space Explorers Ltd.',
    text: 'Working with AeroTech has been a game-changer for our space exploration initiatives. Their team is incredibly skilled and reliable.',
    image: 'https://placekitten.com/102/102',
  },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-emerald-100 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold text-emerald-900">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.company}</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"{testimonial.text}"</p>
        </div>
      ))}
    </div>
  );
}
