'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react'
import Header  from '@/components/Header'
import Footer from '@/components/Footer'
const BlogDetailPage = () => {
  return (
    <div className="bg-[#FCFCFC] min-h-screen text-gray-800 font-serif">
      <Header/>


      {/* ================= HEADER ================= */}

      <header className="pt-26 mt-20 sm:pt-28 pb-8 px-5 sm:px-6 max-w-3xl mx-auto">
        {/* <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-3 font-sans">
          Seasonal and Festive Discount Campaigns · Dec 17, 2025
        </p> */}
       <div className="relative">
  <div className="mb-6">
  <Link
    to="/blog"
    className="inline-flex items-center gap-2 text-sm font-sans text-gray-500 hover:text-gray-900 transition"
  >
    <ArrowLeft size={16} />
    <span>Back to blog</span>
  </Link>
</div>

</div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5 font-sans">
          Precision Pricing: Geo-Targeted 11.11 and Lunar New Year Discount
          Strategies for East Asia
        </h1>

        <p className="text-base sm:text-lg text-gray-500 leading-relaxed italic mb-6">
          How to maximize conversion during East Asia’s biggest sales windows
          without sacrificing margin or control.
        </p>

        <div className="flex flex-wrap items-center gap-5 py-4 border-y border-gray-100 font-sans text-sm text-gray-400">
          <span className="flex items-center">
            <Calendar size={14} className="mr-2" /> Dec 17, 2025
          </span>
          <span className="flex items-center">
            <Clock size={14} className="mr-2" /> 14 min read
          </span>
        </div>
      </header>

      {/* ================= CONTENT ================= */}
      <main className="max-w-3xl mx-auto px-5 sm:px-6 pb-24 space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">

        {/* INTRO */}
        <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left">
          East Asia is the undisputed champion of global e-commerce mega sales.
          From the sheer volume of China’s Singles’ Day (11.11) to the culturally
          vital, multi-week spending spree of Lunar New Year (LNY), these events
          represent your highest potential revenue windows.
        </p>

        <p>
          However, treating China, Singapore, and South Korea as a single entity
          is a fast track to margin erosion. A generic, site-wide 20% discount
          fails to address China’s demand for deep, tiered spending rewards or
          Singapore’s focus on premium gifting.
        </p>

        <p>
          Success in these high-stakes sales requires surgical precision:
          custom discount rates, unique bundles, and targeted rules tied
          directly to specific Shopify Markets.
        </p>

        <p>
          This guide breaks down three high-impact, geo-targeted campaign
          strategies and shows how to automate complex rules using advanced
          discount logic.
        </p>

        {/* ================= SECTION 1 ================= */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans pt-8">
          The Scale and Nuance of East Asia’s Mega Sales
        </h2>

        <p>
          To dominate East Asian festive sales, merchants must understand that
          customers are motivated by different cultural norms, competitive
          pressures, and purchasing behaviors depending on location.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-sans pt-4">
          The Scale of Opportunity
        </h3>

        <p>
          Singles’ Day generated an estimated <strong>$202.8 billion USD</strong>{' '}
          in 2024—nearly five times U.S. Cyber Week spending. China is projected
          to reach <strong>$1.53 trillion</strong> in e-commerce sales by 2025,
          while South Korea is the world’s fifth-largest e-commerce market.
        </p>

        <p>
          Lunar New Year (Feb 17, 2026) drives massive gifting-focused spending
          across China, Singapore, and South Korea—requiring campaigns centered
          on preparation, not just deep discounts.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-sans pt-4">
          Geo-Targeting: Why One Size Doesn’t Fit
        </h3>

        <ul className="list-disc pl-6 space-y-1">
          <li><strong>China:</strong> Progressive tiers and AOV rewards</li>
          <li><strong>Singapore:</strong> Premium gifting and value bundles</li>
          <li><strong>South Korea:</strong> Trend-driven GWP promotions</li>
        </ul>

        <p>
          Shopify Markets is mandatory to enforce these differences and prevent
          regional discount leakage.
        </p>

        {/* ================= SECTION 2 ================= */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans pt-8">
          Tiered 11.11 Discounts (China)
        </h2>

        <p>
          Singles’ Day in China is driven by massive volume and AOV maximization.
          Progressive thresholds consistently outperform flat discounts.
        </p>

        <ul className="bg-gray-50 rounded-xl p-5 space-y-1 font-sans text-sm sm:text-base">
          <li>¥500 → 10% off</li>
          <li>¥1200 → 15% off</li>
          <li>¥2500 → 20% off</li>
        </ul>

        <p>
          These rules must apply exclusively to the Mainland China Market.
          Any other market must fail instantly.
        </p>

        <p>
          Margin protection is achieved by excluding tagged products such as
          <em> “New Arrival 2024”</em> from deeper tiers.
        </p>

        <p>
          Discount Ninja enables stacking, auto-application, and strict Shopify
          Markets enforcement—without manual oversight.
        </p>

        {/* ================= SECTION 3 ================= */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans pt-8">
          Lunar New Year Gifting (Singapore & Korea)
        </h2>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-sans pt-4">
          Singapore: Prosperity Bundles
        </h3>

        <p>
          Buy X Get Y gifting bundles increase AOV while ensuring the free item
          is always the lowest-priced product.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 font-sans pt-4">
          South Korea: GWP & Flash Sales
        </h3>

        <p>
          Korean shoppers respond better to Gift-With-Purchase mechanics and
          short-window promotions than deep discounts.
        </p>

        {/* ================= SECTION 4 ================= */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans pt-8">
          Strategic Price Differentiation
        </h2>

        <p>
          A single global sale can’t compete everywhere. Singapore may require
          a higher base discount, while China benefits from re-engagement offers
          for inactive customers.
        </p>

        {/* ================= SECTION 5 ================= */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 font-sans pt-8">
          Flawless Execution with Advanced Discount Logic
        </h2>

        <p>
          Complex campaigns demand rule prioritization, strict market
          enforcement, and zero leakage—capabilities native Shopify discounts
          cannot deliver.
        </p>

        <p>
          Discount Ninja acts as the middleware layer translating regional
          strategy into automated, conflict-free Shopify Market rules.
        </p>

        {/* ================= CONCLUSION ================= */}
        <hr className="my-10 border-gray-100" />

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">
          Conclusion
        </h2>

        <p>
          Winning East Asia’s festive sales requires moving beyond generic codes
          to geo-targeted, rule-based pricing. Shopify Markets combined with
          advanced discount logic is the only scalable path forward.
        </p>

        {/* ================= CTA ================= */}
        <section className="bg-gray-900 rounded-2xl p-6 sm:p-8 text-white font-sans mt-10">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            Ready to launch precision discounts?
          </h3>
          <p className="text-gray-400 mb-6 text-sm sm:text-base">
            Automate Singles’ Day and Lunar New Year strategies without margin
            compromise.
          </p>

          <Link to="/demo">
            <button className="bg-indigo-600 hover:bg-indigo-700 font-bold py-3 px-8 rounded-lg inline-flex items-center">
              Schedule a Demo <ChevronRight size={18} className="ml-2" />
            </button>
          </Link>
        </section>
   
      </main>
       <Footer/>
    </div>
  )
}

export default BlogDetailPage
