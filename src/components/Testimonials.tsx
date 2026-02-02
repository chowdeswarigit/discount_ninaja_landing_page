import React from 'react';

// Assets
import Star from '@/assets/images/star.svg';
import Flourish from '@/assets/images/flourish.png';
import Numerana from '@/assets/images/num.png';
import IWasASari from '@/assets/images/i-was-a-sari.png';

type Orientation = 'horizontal' | 'vertical';

interface TestimonialsProps {
  orientation?: Orientation;
}

const testimonials = [
  {
    title: 'Discount Ninja is a total game changer.',
    description: 'MarketWise Discount Ninja has been a game-changer for our multi-country fashion store.',
    company: 'I was a Sari',
    country: 'India',
    logo: IWasASari,
  },
  {
    title: 'Best of the apps we have ever used!',
    description: 'This is one of the best apps we have ever used. No other discount app comes close.',
    company: 'Numerana',
    country: 'Mexico',
    logo: Numerana,
  },
  {
    title: 'MarketWise Discount Ninja has been a game changer.',
    description: 'As a global sustainable marketplace, our promotions finally work perfectly.',
    company: 'Flourish',
    country: 'India',
    logo: Flourish,
  },
];

type Testimonial = (typeof testimonials)[number];

const TestimonialCard: React.FC<{
  item: Testimonial;
  variant: Orientation;
}> = ({ item, variant }) => {
  // Fixed heights for vertical, dynamic for horizontal
  const horizontal = 'w-[85vw] sm:w-[340px] md:w-full min-h-[320px] md:min-h-[400px] px-6 md:px-8 py-8';
  const vertical = 'w-full min-h-[200px] px-6 py-6';

  return (
    <div
      className={`bg-white border border-[#E8E7E4] rounded-[20px] flex flex-col justify-between hover:shadow-lg transition-all duration-300 ${
        variant === 'horizontal' ? horizontal : vertical
      }`}
    >
      <div>
        <div className="flex gap-1 mb-4 md:mb-6">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={Star} alt="star" className="w-4 h-4 md:w-5 md:h-5" />
          ))}
        </div>

        <h3 className="font-bold text-lg md:text-xl text-[#120A0B] mb-3 leading-snug">
          {item.title}
        </h3>

        <p className="text-sm md:text-base text-[#454140] leading-relaxed">
          {item.description}{' '}
          <span className="font-semibold underline cursor-pointer hover:text-black">
            Read More
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3 mt-6 md:mt-8">
        <div
          className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden ${
            item.company === 'Numerana'
              ? 'bg-[#5B356C]'
              : 'border border-[#E8E7E4] bg-white'
          }`}
        >
          <img
            src={item.logo}
            alt={item.company}
            className="w-10 md:w-12 h-5 object-contain p-1"
          />
        </div>

        <div className="overflow-hidden">
          <p className="font-semibold text-xs md:text-sm text-[#120A0B] truncate">
            {item.company}
          </p>
          <p className="text-xs md:text-sm text-[#454140]">
            {item.country}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC<TestimonialsProps> = ({
  orientation = 'horizontal',
}) => {
  const verticalTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-12 md:py-24 px-4 md:px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-flex bg-[#FFD86F] px-4 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider mb-4">
            Testimonials
          </span>

          <h2 className="font-bold text-3xl md:text-5xl leading-tight text-[#120A0B] mb-4">
            Our Success Stories
          </h2>

          <p className="text-base md:text-lg text-[#454140] max-w-xl mx-auto px-2">
            Real stories from merchants who stopped losing revenue to pricing bugs
            and started scaling with precision.
          </p>
        </div>

        {/* Content Section */}
        <div className="mx-auto max-w-6xl">
          {orientation === 'horizontal' ? (
            /* Horizontal Scroll on Mobile, Grid on Desktop */
            <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-6 -mx-4 px-4 md:mx-0 md:px-0">
              {testimonials.map((item, index) => (
                <div key={`${item.company}-${index}`} className="snap-center">
                  <TestimonialCard
                    item={item}
                    variant="horizontal"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Vertical Auto-Scrolling Track */
            <div className="relative h-[500px] md:h-[700px] overflow-hidden group rounded-2xl">
              {/* Fade edges */}
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

              {/* Scrolling track */}
              <div className="animate-scroll-vertical group-hover:[animation-play-state:paused] flex flex-col gap-6">
                {verticalTestimonials.map((item, index) => (
                  <div key={`v-${index}`} className="px-2">
                    <TestimonialCard item={item} variant="vertical" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

/** * ADD THIS TO YOUR tailwind.config.js:
 * * theme: {
 * extend: {
 * animation: {
 * 'scroll-vertical': 'scroll-vertical 20s linear infinite',
 * },
 * keyframes: {
 * 'scroll-vertical': {
 * '0%': { transform: 'translateY(0)' },
 * '100%': { transform: 'translateY(-50%)' },
 * }
 * }
 * }
 * }
 */