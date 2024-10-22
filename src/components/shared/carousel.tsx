'use client';

import { useState, useRef, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [currentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalItems = children.length;
  const itemWidth = 320; // Width of each item including margin

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: currentIndex * itemWidth,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className="flex items-center mt-5">
      <div className="shrink-0 snap-center hidden nano:block nano:w-[5%] 3xl:w-[10%] 4xl-[1704px]:hidden h-48" />
      <div
        ref={carouselRef}
        className="relative flex flex-row gap-4 overflow-x-auto mx-auto 4xl:w-[1109px] 4xl:max-w-[90%]"
      >
        {children.map((child, index) => (
          <div key={index} style={{ width: `${itemWidth}px` }}>
            {child}
          </div>
        ))}
        <div className="shrink-0 snap-center sm:w-2" />
      </div>
    </div>
  );
}
