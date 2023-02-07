import { useState } from 'react';
import { IMAGES } from './images';

const IMAGE_HEIGHT = 694;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex h-[694px] gap-x-5 overflow-hidden">
      <ul
        className={`pointer-events-auto flex flex-col transition-transform duration-1000`}
        style={{
          transform: `translateY(-${activeIndex * IMAGE_HEIGHT}px)`,
        }}
      >
        {IMAGES.map((src, index) => (
          <li key={index} className="h-[694px]">
            <img className="h-full object-cover" src={src} alt="Product" />
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <div
          className="w-[1px] bg-black transition-all duration-1000"
          style={{
            height: `${(activeIndex + 1) * (IMAGE_HEIGHT / IMAGES.length)}px`,
          }}
        ></div>
        <div className="w-[1px] flex-1 bg-gray-300"></div>
      </div>
      <ul className="flex flex-col gap-y-1">
        {IMAGES.map((src, index) => (
          <li key={index} className="h-11 w-7">
            <button onClick={() => setActiveIndex(index)}>
              <img className="h-full object-cover" src={src} alt="Product" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
