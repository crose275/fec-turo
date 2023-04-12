import React, {useState} from "react";
import { SliderData } from "./sliderdata";
import {CgChevronRight, CgChevronLeft} from 'react-icons/cg'
import './image.css'
import { HeartIcon } from "./heartComponent";

import { NumberList } from "./numberList";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        <NumberList />
        <HeartIcon />
        <CgChevronLeft className='left-arrow' onClick={prevSlide} />
        <CgChevronRight className='right-arrow' onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt='Jeep' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };
  
  export default ImageSlider;