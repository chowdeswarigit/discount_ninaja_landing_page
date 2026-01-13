  'use client';

  import React, { useEffect, useRef, useState } from 'react';
  import Testimonials from "@/components/Testimonials";

  // --------------------
  // TYPES
  // --------------------
  interface CoreValue {
    title: string;
    description: string;
    icon: React.ReactNode;
  }

  interface Stat {
    label: string;
    value: number;
    suffix?: string;
  }

  // --------------------
  // COUNT UP COMPONENT
  // --------------------
  interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
  }

  const CountUp: React.FC<CountUpProps> = ({
    end,
    duration = 1500,
    suffix = '',
  }) => {
    const [count, setCount] = useState(0);
    const startTime = useRef<number | null>(null);

    useEffect(() => {
      const animate = (time: number) => {
        if (!startTime.current) startTime.current = time;
        const progress = Math.min((time - startTime.current) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  // --------------------
  // MAIN COMPONENT
  // --------------------
  const DiscountNinjaAbout: React.FC = () => {
   const stats = [
  {
    label: "Active Merchants",
    value: 10000,
    suffix: "+",
    description: "Trusted by thousands of merchants worldwide using Discount Ninja daily.",
  },
  {
    label: "Revenue Generated",
    value: 500,
    suffix: "M+",
    description: "Total merchant revenue powered through optimized promotions.",
  },
  {
    label: "Promotion Types",
    value: 25,
    suffix: "+",
    description: "Flexible discount types built for modern Shopify stores.",
  },
  {
    label: "Support Rating",
    value: 49,
    suffix: "/5",
    description: "Highly rated support from merchants and partners globally.",
  },
];


    const values: CoreValue[] = [
      {
        title: 'Performance First',
        description:
          "We build tools that don't just look good, but actively drive AOV and conversion rates through smart logic.",
        icon: (
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: 'Seamless Integration',
        description:
          'Deeply integrated with Shopify Functions to ensure your store remains fast, stable, and native.',
        icon: (
          <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        ),
      },
      {
        title: 'Merchant-Centric',
        description:
          'Our roadmap is driven by the real-world needs of high-volume Shopify brands and developers.',
        icon: (
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
      },
    ];

    return (
      <div className="bg-white text-slate-900">
        {/* HERO */}
        <section className="pt-24 pb-16 px-6 text-center">
          <span className="inline-block mt-6 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-sm font-bold mb-4">
            OUR STORY
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6">
            Empowering brands to <br />
            <span className="text-orange-600 italic">sell smarter.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discount Ninja was built to help Shopify merchants create smarter,
            high-converting promotions without complexity.
          </p>
        </section>

        {/* STATS */}
        <section className="py-12 border-y border-slate-100">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {stats.map((stat, i) => (
    <div
      key={i}
      className="
        bg-white
        border border-slate-100
        rounded-3xl
        p-8
        text-center
        shadow-sm
        hover:shadow-md
        transition-shadow
      "
    >
      <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
        <CountUp end={stat.value} suffix={stat.suffix} />
      </p>

      <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-3">
        {stat.label}
      </p>

      <p className="text-sm text-slate-600 leading-relaxed">
        {stat.description}
      </p>
    </div>
  ))}
</div>

        </section>

        {/* VALUES */}
        <section className="py-24 bg-slate-50 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 bg-white">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-500">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* VERTICAL TESTIMONIALS (scrollable) */}
        <Testimonials orientation="vertical" />
      </div>
    );
  };

  export default DiscountNinjaAbout;
