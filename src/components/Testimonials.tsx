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
    description:
      'MarketWise Discount Ninja has been a game-changer for our multi-country fashion store.',
    company: 'I was a Sari',
    country: 'India',
    logo: IWasASari,
  },
  {
    title: "It's a total game-changer for our company so far.",
    description:
      'MarketWise Discount Ninja has been a game-changer for our multi-country fashion store.',
    company: 'I was a Sari',
    country: 'India',
    logo: IWasASari,
  },
  {
    title: 'Best of the apps we have ever used!',
    description:
      'This is one of the best apps we have ever used. No other discount app comes close.',
    company: 'Numerana',
    country: 'Mexico',
    logo: Numerana,
  },
  {
    title: 'MarketWise Discount Ninja has been a game changer.',
    description:
      'As a global sustainable marketplace, our promotions finally work perfectly.',
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
  const horizontal =
    'w-[280px] md:w-full min-h-[360px] md:h-[420px] px-6 md:px-[35px] py-8 md:py-[40px]';
  const vertical = 'w-full min-h-[220px] px-6 py-6';

  return (
    <div
      className={`bg-white border border-[#E8E7E4] rounded-[20px] flex flex-col justify-between hover:shadow-md transition-shadow ${
        variant === 'horizontal' ? horizontal : vertical
      }`}
    >
      <div>
        <div className="flex gap-1.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={Star} alt="star" className="w-4 md:w-5" />
          ))}
        </div>

        <h3 className="font-satoshi font-bold text-lg md:text-xl text-[#120A0B] mb-3">
          {item.title}
        </h3>

        <p className="font-satoshi text-sm md:text-base text-[#454140] leading-relaxed">
          {item.description}{' '}
          <span className="font-semibold underline cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      <div className="flex items-center gap-3 mt-8">
        <div
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${
            item.company === 'Numerana'
              ? 'bg-[#5B356C]'
              : 'border border-[#E8E7E4] bg-white'
          }`}
        >
          <img
            src={item.logo}
            alt={item.company}
            className="w-9 md:w-11 h-4 object-contain"
          />
        </div>

        <div>
          <p className="font-satoshi font-semibold text-xs md:text-sm text-[#120A0B]">
            {item.company}
          </p>
          <p className="font-satoshi text-xs md:text-sm text-[#454140]">
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
    <section className="w-full bg-white pt-20 px-6 pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1920px]">
        <div className="text-center mb-14">
          <span className="inline-flex bg-[#FFD86F] px-4 py-1 rounded-full text-xs md:text-sm font-medium mb-5">
            Testimonials
          </span>

          <h2 className="font-satoshi font-bold text-3xl md:text-[48px] leading-tight text-[#120A0B] mb-4">
            Our success stories
          </h2>

          <p className="font-satoshi text-sm md:text-base text-[#454140] max-w-[520px] mx-auto">
            Real stories from merchants who stopped losing revenue to pricing bugs
            and started scaling with precision.
          </p>
        </div>

        <div className="mx-auto max-w-[1200px]">
          {orientation === 'horizontal' ? (
            <div className="flex md:grid grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible no-scrollbar pb-4">
              {testimonials.map((item, index) => (
                <TestimonialCard
                  key={`${item.company}-${index}`}
                  item={item}
                  variant="horizontal"
                />
              ))}
            </div>
          ) : (
            <div className="relative h-[720px] overflow-hidden group">
              {/* Fade edges */}
              <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10" />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent z-10" />

              {/* Scrolling track */}
              <div className="animate-scroll-vertical group-hover:[animation-play-state:paused]">
                <div className="flex flex-col gap-6">
                  {verticalTestimonials.map((item, index) => (
                    <div key={`v-${index}`} className="px-1">
                      <TestimonialCard item={item} variant="vertical" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
