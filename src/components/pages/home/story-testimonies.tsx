import Image from 'next/image';
import Link from 'next/link';

export default function StoryAndTestimonial() {
  return (
    <div className="app-container mx-auto py-12 mt-10 flex flex-col items-center justify-between md:flex-row gap-8">
      <div className="w-full sm:max-w-[475px] h-[366px] border border-black flex flex-col gap-6">
        <h3 className="text-sm text-primary">Our Amazing Story</h3>
        <div className="relative inline-block w-fit mb-4">
          <svg
            width="240"
            height="47"
            viewBox="0 0 240 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -bottom-2 right-0"
          >
            <rect width="240" height="47" fill="#FFD723" fillOpacity="0.1" />
          </svg>
          <h2 className="relative text-2xl sm:text-4xl w-fit font-bold text-primary leading-[46px] px-2 py-1">
            10k+ Happy Customers
          </h2>
        </div>
        <p className="text-navy-dark/60">
          There&apos;s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </p>
        <Link href="/about" className="text-primary font-semibold underline">
          More know About us
        </Link>
      </div>

      <div className="w-full max-w-[474px] h-96 sm:h-[455px] bg-secondary p-8 flex flex-col justify-between border border-black shadow-[0_100px_100px_-20px_rgba(0,0,0,0.1459)]">
        <p className="text-lg sm:text-2xl text-olive font-semibold italic mb-6 leading-[40px]">
          I&apos;m a very anxious person but use this and feel so relaxed and
          sleep way better now with the aid of sleepstiq.
        </p>
        <div className="">
          <div className="flex items-center gap-4">
            <Image
              src="/transparent-happy-person-png-happy-man-face-png 1.png"
              alt="James Miller"
              width={50}
              height={50}
              className="rounded-full sm:w-[84px] sm:h-[84px]"
            />
            <div className="space-y-1">
              <h3 className="font-semibold text-olive text-base sm:text-[22px]">
                James Miller
              </h3>
              <p className="text-sm sm:text-base text-primary">CEO, Techbias</p>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
