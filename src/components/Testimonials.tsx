import React from 'react';

const testimonials = [
  {
    name: 'Dr. Evelyn Reed',
    company: 'Aerospace Dynamics Corp.',
    text: 'AeroTech has consistently delivered exceptional results in our collaborative projects. Their expertise in propulsion systems is truly remarkable.',
    image: 'https://images.unsplash.com/photo-1573496799689-413716d4e81a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Mr. James Carter',
    company: 'Global Flight Innovations',
    text: 'Their innovative approach to flight control systems has significantly improved our aircraft performance. AeroTech is a reliable and forward-thinking partner.',
    image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ms. Sarah Chen',
    company: 'Advanced Space Technologies',
    text: 'We have been working with AeroTech on several space exploration projects, and their contributions to material science have been invaluable. Their team is highly professional and dedicated.',
    image: 'https://images.unsplash.com/photo-1580820067279-479492119e84?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              className="w-12 h-12 rounded-full mr-4 object-cover"
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
