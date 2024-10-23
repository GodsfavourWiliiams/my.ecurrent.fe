import React from 'react';
import Image from 'next/image';

export default function ViewProduct() {
  return (
    <div className="app-container ">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20 md:pb-20">
        <div className="md:w-1/2">
          <Image
            src="/Vape-Pen.png"
            alt="Sleepstiq Personal Melatonine Diffuser"
            width={477}
            height={519}
          />
        </div>
        <div className="lg:w-1/2 h-fit lg:mt-40">
          <h1 className="text-4xl font-bold text-primary mb-6">
            About Product
          </h1>
          <p className="text-navy-dark/60 mb-6 lg:max-w-[421px] leading-[26px]">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <div className="mb-8">
            <ul className="space-y-2 text-olive">
              <li className="flex items-center">
                <span className="mr-2">😌</span>
                <span className="italic">Promotes calm and relaxation</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💨</span>
                <span className="italic">
                  Inhalation allows for a rapid effect
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <div className="italic flex flex-col">
                  <span>100% drug-free, plant-based ingredients.</span>
                  <span> 3rd-party lab tested</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-start justify-between sm:justify-start gap-8 mb-6">
            <div className="flex flex-col gap-2">
              <span className=" text-black">Price</span>
              <p className="text-base font-semibold">USD 50</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black">Unit</span>
              <input
                type="number"
                defaultValue={2}
                min={1}
                className="w-[63px] h-[33px] text-center border rounded-md outline-black border-black"
              />
            </div>
          </div>
          <button className="bg-coral hover:bg-coral/90 rounded-md w-[225px] py-3 text-white">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
