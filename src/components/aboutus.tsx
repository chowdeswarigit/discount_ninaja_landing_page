'use client'

import React from 'react'
import { ArrowRight, Globe } from 'lucide-react'

const MarketwiseAbout = () => {
  return (
    <div className="bg-[#fcfcfd] text-[#1a1a1a] font-satoshi selection:bg-orange-100 selection:text-orange-900">

      {/* ================= HERO ================= */}
      <section className="pt-24 pb-10 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mt-14 text-gray-800">
            Global commerce, <br />
            <span className="italic font-medium">
              without the headache.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto font-light leading-relaxed mt-5">
            Running a store across multiple markets shouldn’t feel like juggling flaming swords.
          </p>

        </div>
      </section>

      {/* ================= PHILOSOPHY / MANIFESTO ================= */}
      <section className="px-6 py-8">
        <div className="max-w-3xl mx-auto space-y-6">

          <p className="text-2xl font-bold text-gray-800">
            We believe global commerce should feel simple.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            Selling across borders is no longer a luxury — it’s the natural direction of modern commerce.
            Customers expect local pricing, familiar currencies, and experiences that feel native wherever they are.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            Yet for many merchants, growth introduces friction instead of freedom.
            More markets mean more complexity. More tools. More workarounds.
            More time spent managing systems instead of building a business.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            Marketwise exists to change that.

            We build focused tools that help Shopify merchants operate globally
            without losing clarity, control, or momentum.
          </p>

          <p className="text-2xl font-bold text-gray-800 pt-4">
            We believe scale should not come at the cost of clarity.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            As businesses expand, systems often become fragile.
            Decisions multiply. Context gets lost.
            What once felt intuitive starts to feel unpredictable.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            We don’t believe that’s inevitable.
            Pricing should be intentional. Marketing should be contextual.
            Operations should feel steady — not held together by workarounds.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            Our goal is to reduce cognitive load.
            Fewer systems to reconcile. Fewer decisions to second-guess.
            More space to think clearly and grow with confidence.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            We are merchants-first, through and through.
            That means real support when it matters most —
            during launches, promotions, and moments when every decision counts.
          </p>

          <p className="text-lg leading-relaxed text-gray-800 font-light">
            Most of our best ideas don’t come from a roadmap.
            They come from listening to merchants navigating real markets,
            real customers, and real constraints every day.
          </p>

        </div>
      </section>

      {/* ================= QUESTIONS & ANSWERS ================= */}
      <section className="px-6 py-8 border-t border-gray-100">
        <div className="max-w-3xl mx-auto space-y-8">

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-gray-800 mb-2">
              Why Marketwise?
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 font-light">
              Because global selling shouldn’t require stitching together a dozen tools.
              We focus on the problems that compound as you grow — pricing consistency,
              localization, and operational clarity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-gray-800 mb-2">
              Who is Marketwise for?
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 font-light">
              Shopify merchants expanding beyond their home market
              who want systems that scale with them — not against them.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-gray-800 mb-2">
              What makes you different?
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 font-light">
              We don’t chase feature checklists.
              Every feature exists because a merchant needed it.
              If it doesn’t earn its place, we don’t ship it.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold uppercase tracking-[0.3em] text-gray-800 mb-2">
              How do you approach support?
            </h3>
            <p className="text-lg leading-relaxed text-gray-800 font-light">
              Support is a partnership.
              When something matters to your business,
              it matters to us — with real humans and real context.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section className="px-6 py-16 border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto">

          <Globe size={52} strokeWidth={1} className="mx-auto mb-6 text-gray-300" />

          <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-800">
            Your co-pilot for <br />
            <span className="italic font-medium text-5xl md:text-6xl">
              global growth.
            </span>
          </h2>

          <div className="space-y-4 max-w-2xl mx-auto mb-10">
            <p className="text-lg text-gray-500 font-light leading-relaxed">
              Think of us less like a software company and more like a partner.
              We’re here to help you scale with confidence, one market at a time.
            </p>

            <p className="text-lg text-gray-500 font-light leading-relaxed">
              As your business grows, complexity shouldn’t grow with it.
              Our role is to remove friction — so you can focus on what matters.
            </p>
          </div>

          <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#1a1a1a] text-white font-bold hover:bg-gray-800 transition-all shadow-lg">
            Join the mission
            <ArrowRight size={18} />
          </button>

          <p className="mt-10 text-[10px] font-black tracking-[0.4em] uppercase text-gray-300">
            Marketwise · Est. 2024
          </p>

        </div>
      </section>

    </div>
  )
}

export default MarketwiseAbout
