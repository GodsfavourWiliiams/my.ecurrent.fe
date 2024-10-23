'use client';

import { useState, useRef, useEffect } from 'react';

interface CarouselProps {
  children: React.ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [currentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
    <div className="flex items-center">
      <div className="shrink-0 snap-center w-[3%] nano:w-[3%] md:w-[5%] xl:w-[8%] 2xl:w-[10%] 3xl:w-[15%] 4xl-[1704px]:hidden h-48" />
      <div
        ref={carouselRef}
        className="relative flex flex-row gap-4 overflow-x-auto mx-auto 4xl:w-[1200px] 4xl:max-w-[90%]"
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
