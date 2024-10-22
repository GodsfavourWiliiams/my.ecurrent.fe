import { Carousel } from '@/components/shared/carousel';
import { TestimonialCard } from '@/components/shared/testimonial-card';

const testimonials = [
  {
    quote:
      'Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.',
    name: 'John Matthews',
  },
  {
    quote:
      'I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.',
    name: 'Eunice Oliver',
  },
  {
    quote: "It's a really good product and helps me sleep better at night!",
    name: 'Laura Davies',
  },
  {
    quote:
      'Helps me relax and remember to breathe. Stress level definitely goes down',
    name: 'Jane Bocks',
  },
];

export function TestimonialCarousel() {
  return (
    <div className="py-12">
      <Carousel>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2">
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
