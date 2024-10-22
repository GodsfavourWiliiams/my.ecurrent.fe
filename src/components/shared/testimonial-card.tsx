import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
}) => {
  return (
    <div className="bg-secondary flex flex-col justify-between gap-5 p-5 sm:p-7 rounded-lg w-[300px] h-[202px]">
      <p className="text-olive italic">{quote}</p>
      <div className="space-y-2">
        <h3 className="font-semibold text-olive">{name}</h3>{' '}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-emerald text-emerald" />
          ))}
        </div>
      </div>
    </div>
  );
};
