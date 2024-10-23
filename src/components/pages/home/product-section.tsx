import Image from 'next/image';

export default function Product() {
  return (
    <div className="space-y-10 md:space-y-0 mt-5">
      {/* Shop Now Section */}
      <div className="pt-20 border-t app-container flex flex-col lg:flex-row items-start lg:items-center gap-10">
        <div className="w-full h-full order-2 lg:order-1">
          <Image
            src="/Vape-Pen-Group.png"
            alt="Sleepstiq Personal Melatonin Diffuser"
            width={775}
            height={580}
            unoptimized
          />
        </div>

        <div className="md:w-1/2 lg:-mt-20 lg:order-2 order-1">
          <h2 className="text-4xl font-bold text-primary mb-4">Shop Now</h2>
          <p className="text-navy-dark/60 leading-[26px] mb-6">
            Our Personal Diffuser is an aromatherapy device that contains a
            blend of melatonin, lavender, and chamomile. A few breaths of our
            plant-based essential oil mist will mellow you out, quiet the mind,
            and lull you to bed.
          </p>
          <button className="bg-coral text-white w-[225px] px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
            Visit Shop
          </button>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mx-auto max-w-[90%] md:max-w-full flex flex-col md:flex-row items-start md:items-center relative">
        <div className="md:block hidden shrink-0 snap-center w-[3%] nano:w-[3%] md:w-[5%] xl:w-[8%] 2xl:w-[10%] 3xl:w-[15%] 4xl-[1704px]:hidden h-48" />
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
          <h2 className="text-4xl font-bold text-primary mb-5">Our Mission</h2>
          <p className="text-navy-dark/60 mb-7 w-full max-w-[421px]">
            We started Sleepstiq with 1 simple goal: to be your best friend at
            bedtime. We, just like you, deal with stress, unease, and trouble
            sleeping from a number of silly things like school, work, screens,
            numbers, and people. That&apos;s why we created products that aim to
            -
          </p>
          <ul className="space-y-2 text-navy-dark/60">
            {[
              '✓ Promote Calm',
              '✓ Support Sleep',
              '✓ Reduce Stress',
              '✓ Aid Relaxation',
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 ">
          <Image
            src="/Group 3 (1).png"
            alt="Woman sleeping peacefully"
            width={735}
            height={550}
            className=""
            unoptimized
          />
        </div>
      </div>

      {/* Visit Our Shop Section */}
      <div className="text-center space-y-6 app-container md:pt-28">
        <h2 className="text-4xl font-bold text-primary">Visit Our Shop</h2>
        <p className="text-navy-dark/60 mb-6 max-w-[915px] leading-[26px] mx-auto">
          Our Personal Diffuser is an aromatherapy device that contains a blend
          of melatonin, lavender, and chamomile. A few breaths of our
          plant-based essential oil mist will mellow you out, quiet the mind,
          and lull you to bed.
        </p>
        <button className="bg-coral text-sm w-[225px] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
          Visit Shop
        </button>
      </div>
    </div>
  );
}
