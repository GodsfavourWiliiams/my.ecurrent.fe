'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '@/utils/static';

const FAQItem: React.FC<{
  question: string;
  answer: string;
  index: number;
}> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t">
      <button
        className="flex justify-between items-center w-full py-4 text-left text-navy hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`${
            isOpen
              ? 'font-medium sm:font-semibold sm:text-lg transition-all duration-100 ease-in-out'
              : ''
          } text-primary`}
        >
          Q{index + 1}: {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5" />
        ) : (
          <ChevronDown className="h-5 w-5" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 pt-2 text-black">{answer}</p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);

  return (
    <div className="flex flex-col md:flex-row app-container">
      <div className="md:w-1/4 mb-6 md:mb-0">
        <ul className="hidden md:flex flex-col space-y-7 text-primary">
          {faqData.map((category) => (
            <li
              key={category.category}
              className="relative inline-block w-fit cursor-pointer"
              //   onClick={() => setActiveCategory(category.category)}
            >
              {activeCategory === category.category && (
                <svg
                  width="126"
                  height="47"
                  viewBox="0 0 126 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-2 right-0"
                >
                  <rect
                    width="126"
                    height="47"
                    fill="#FFD723"
                    fillOpacity="0.1"
                  />
                </svg>
              )}
              <h2
                className={`relative text-lg w-fit ${
                  activeCategory === category.category
                    ? 'font-bold'
                    : 'font-normal'
                }`}
              >
                {category.category}
              </h2>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:w-3/4 md:pl-8">
        {/* Mobile Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6 md:hidden">
          {faqData.map((category) => (
            <button
              key={category.category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.category
                  ? 'bg-yellow-50 text-navy'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.category)}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData
            .find((category) => category.category === activeCategory)
            ?.questions.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
