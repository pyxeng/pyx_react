import React from 'react';
import Slider from 'react-slick';

const sliderImages = [
  'https://placekitten.com/800/400',
  'https://placekitten.com/801/400',
  'https://placekitten.com/802/400',
  'https://placekitten.com/803/400',
  'https://placekitten.com/804/400',
];

export default function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {sliderImages.map((image, index) => (
        <div key={index} className="relative">
          <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover" />
        </div>
      ))}
    </Slider>
  );
}
