'use client';

import { Icons } from '@/app/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function Hero() {
  const pathname = usePathname();

  const variant = useMemo(() => {
    switch (pathname) {
      case '/shop':
        return 'shop';
      case '/faqs':
        return 'faqs';
      default:
        return 'home';
    }
  }, [pathname]);

  if (variant === 'faqs') {
    return (
      <div className="py-12 h-[596px] bg-secondary flex flex-col items-center justify-center">
        <div className="app-container mx-auto flex flex-col gap-6 items-start justify-start">
          <p className="text-primary text-lg">We&apos;re here to help you</p>
          <h1 className="text-3xl sm:text-[60px] font-semibold text-primary ">
            How can we assist?
          </h1>
          <div className="relative w-full">
            <Icons.Search className="absolute left-6 bottom-4 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQs here"
              className="w-full max-w-[859px] pl-14 pr-4 py-4 rounded-[10px] bg-white focus:ring-0 outline-none"
            />
          </div>
        </div>
      </div>
    );
  }
  const isHomeVariant = variant === 'home';

  return (
    <div
      className={`${
        isHomeVariant ? 'h-[60vh] md:h-[80vh]' : 'h-[596px]'
      } relative `}
    >
      <Image
        src={isHomeVariant ? '/woman-sleeping.png' : '/man-sleeping.png'}
        className="object-cover w-full h-full"
        alt={
          isHomeVariant
            ? 'Woman sleeping peacefully'
            : 'Man sleeping with eye mask'
        }
        width={100}
        height={100}
        unoptimized
      />
      <div className="app-container absolute inset-0 flex flex-col justify-center">
        <div className="max-w-xl text-primary space-y-4 sm:pace-y-6">
          <p className="text-lg">We&apos;re here to help you</p>
          <h1 className="text-4xl sm:text-[60px] font-bold ">Relax & Rest</h1>
          {isHomeVariant && (
            <div className="space-y-6">
              <p className="text-base">
                With the aid of our Melatonin Sleepstiq, we can assure you that
                you can get quality sleep.
              </p>
              <Link
                href="/shop"
                className="bg-coral text-sm font-semibold block text-white py-4 w-[225px] text-center rounded-md hover:bg-coral/60"
              >
                Visit Shop
              </Link>
            </div>
          )}
        </div>
      </div>
      {isHomeVariant && (
        <div className=" transform translate-y-1/2 max-w-[1276px] w-full mx-auto absolute bottom-0 right-0 p-6 sm:p-8 bg-white border border-black shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1459)]">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5 sm:gap-10">
            <div className="w-[146px] h-[41px] sm:h-[51px]">
              <Image
                src="/google-logo.png"
                alt="Google"
                width={146}
                height={51}
                className="h-full object-contain w-full"
                unoptimized
              />
            </div>
            <div className="w-[129px] h-[26px] sm:h-[36px]">
              <Image
                src="/forbes-logo.png"
                alt="Forbes"
                width={80}
                height={30}
                className="h-full object-contain w-full"
                unoptimized
              />
            </div>
            <div className="w-[226px] h-[24px] sm:h-[44px]">
              <Image
                src="/bloomberg-logo.png"
                alt="Bloomberg"
                width={80}
                height={30}
                className="h-full object-contain w-full"
                unoptimized
              />
            </div>
            <div className="w-[201px] h-[28px] sm:h-[48px]">
              <Image
                src="/sleep-review-logo.png"
                alt="Sleep Review"
                width={80}
                height={30}
                className="h-full object-contain w-full"
                unoptimized
              />
            </div>
            <div className="w-[220px] h-[28px] sm:h-[48px]">
              <Image
                src="/influencive-logo.png"
                alt="Influencive"
                width={80}
                height={30}
                className="h-full object-contain w-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
