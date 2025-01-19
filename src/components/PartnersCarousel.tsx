import React from 'react';
import Slider from 'react-slick';

const logos = [
  'https://placekitten.com/150/100',
  'https://placekitten.com/151/100',
  'https://placekitten.com/152/100',
  'https://placekitten.com/153/100',
  'https://placekitten.com/154/100',
  'https://placekitten.com/155/100',
  'https://placekitten.com/156/100',
  'https://placekitten.com/157/100',
];

export default function PartnersCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => (
        <div key={index} className="p-4 flex justify-center">
          <img src={logo} alt={`Partner ${index + 1}`} className="max-h-20 object-contain" />
        </div>
      ))}
    </Slider>
  );
}
