import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  content: React.ReactNode
}

export const blogPosts: Record<string, BlogPost> = {
  'why-shopify-discounts-fall-short': {
    slug: 'why-shopify-discounts-fall-short',
    title: 'Why Shopify Discounts Fall Short for Global Merchants',
    description: 'How localized pricing strategy is the hidden bottleneck for scaling Shopify Plus merchants.',
    date: 'Dec 17, 2025',
    readTime: '14 min read',
    content: (
      <>
        {/* INTRO */}
        <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left">
          Global expansion promises massive revenue, but for scaling Shopify Plus merchants,
          executing a localized pricing strategy is often the hidden technical bottleneck.
          While the global cross-border e-commerce market is projected to reach $5.9 trillion by 2029,
          achieving that growth demands technical agility that aligns with strategic goals.
        </p>

        <p>
          Shopify's native discount engine is robust for single-store operations, but it was
          not engineered for the complexity of multi-market retailing. This misalignment between
          a sophisticated global strategy and inflexible technical tools is the core challenge
          facing every scaling international merchant utilizing Shopify Markets.
        </p>

        <blockquote className="border-l-4 border-[#2FA3A2] pl-4 py-2 bg-gray-50 italic text-gray-900">
          "Research shows that full localization for two or more markets can lead to an
          16.42% to 18.22% increase in growth rate, compared to just 8.14% for companies with no localization."
        </blockquote>

        {/* SECTION 1 */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          1. The Strategic Imperative: Localized Promotions are Non-Negotiable
        </h2>
        <p>
          Scaling globally is not just about translating product descriptions; it is about acting
          like a local brand in every market you enter. To achieve this, your promotions must
          move far beyond simple, shop-wide discounts.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">Competitive Pricing and Value Perception</h3>
        <p>
          A single, universal discount rate can instantly make you uncompetitive in high-saturation markets. Global brands constantly adjust their promotional cadence to match local competitor actions. If a major local competitor in Germany launches a 20% off campaign, you need the technical agility to counter with a specific, time-bound offer only for your German market, without devaluing your brand in the USA.
        </p>

        <p>
          Furthermore, the perceived value of a discount changes based on the local currency and economy. The global Average Order Value (AOV) is projected to reach $150–$180 by the end of 2025. To maintain perceived value locally, you need the flexibility to offer a 15% percentage discount in the UK market, while simultaneously offering a $50 fixed amount discount in the US market, ensuring both offers resonate equally with local consumers.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">Regulatory and Compliance Requirements</h3>
        <p>
          In regions like France, national sales periods known as <em>"Les soldes"</em> are
          compulsory, fixed-date events. This regulatory requirement demands absolute control
          over geographic targeting and timing that native tools simply cannot provide.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">Inventory and Logistics Optimization</h3>
        <p>
          Targeted discounting is a powerful tool for clearing excess stock in specific regional
          warehouses. Running a deep discount only for customers in countries surrounding a
          European warehouse prevents costly transfers and storage fees without impacting full-price
          sales in high-demand markets like Australia.
        </p>

        {/* SECTION 2 */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          2. The Core Technical Barrier: Shopify Discounts Lack Market ID Awareness
        </h2>
        <p>
          The fundamental issue is that Shopify's native discount engine operates at the shop level,
          not the market level.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 my-6">
          <h4 className="font-bold text-gray-900 mb-2">The "All or Nothing" Problem</h4>
          <p className="text-sm sm:text-base text-gray-600">
            When you create an automatic campaign, it applies universally across all active markets.
            Unless complex workarounds are implemented, a US-targeted promotion can be accessed
            by customers in Japan or Brazil. For merchants managing up to 50 distinct markets,
            this forces a choice: run fewer campaigns or dedicate massive developer resources to
            fragile custom code.
          </p>
        </div>

        <p>
          The most frustrating limitation is the absence of native <strong>Market ID Targeting</strong>.
          You cannot simply select "Apply this 25% off code only to Market ID: [UK]" within the
          native flow. A true solution requires a discount engine natively aware of the market context
          to ensure the right price appears instantly based on Shopify's authoritative market designation.
        </p>

        {/* SECTION 3 */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          3. The Segmentation Gap and Operational Risk
        </h2>
        <p>
          Customers receiving personalized experiences show 2.1x higher lifetime values. To achieve
          this, your discount engine must support complex, nested rules that native Shopify
          customer tags cannot handle alone.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li><strong>CLV Thresholds:</strong> Offering special discounts only to customers whose total spend exceeds a specific amount.</li>
          <li><strong>Nested Logic:</strong> Running promotions exclusively for customers tagged as "VIP" AND "UAE Resident" AND "Repeat Buyer."</li>
          <li><strong>Order History:</strong> Targeting based on order count history to drive retention.</li>
        </ul>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-6">Costly Discount Stacking and Duplication</h3>
        <p>
          One of the most significant financial risks is <strong>"discount stacking,"</strong> where
          multiple codes unintentionally combine (e.g., 20% + 30% resulting in 50% off). Scaling
          internationally multiplies this risk. You need robust, centralized logic to dictate
          mutually exclusive discounts across all markets.
        </p>

        {/* EXAMPLE BOX */}
        <div className="my-10 p-6 bg-[#2FA3A2]/10 rounded-2xl border border-[#2FA3A2]/20">
          <h4 className="font-bold text-[#2FA3A2] mb-2 text-xl italic flex items-center">
            <span className="mr-2">💡</span> Real-World Scenario: Seasonal Inventory Conflict
          </h4>
          <p className="text-sm sm:text-base text-gray-800">
            A major clothing brand operates in both hemispheres. They need a regional "Winter Clearance"
            in Australia in July to clear stock, while maintaining full-price "Back to School"
            promotions in the USA. Without Market ID awareness, the clearance code risks leaking
            to the Northern Hemisphere, eroding margins on full-price seasonal inventory.
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-10">Conclusion</h2>
        <p>
          The journey from a single-market shop to a thriving global enterprise is defined by
          strategic flexibility. When your discount strategy is hampered by technical limitations,
          you leave revenue on the table and erode the ROI of your global strategy.
        </p>
        <p>
          If your current setup is forcing operational compromises, it's time to explore a
          platform built specifically for <strong>Marketwise discounting</strong>.
        </p>

        {/* CTA SECTION */}
        <section className="bg-gray-900 rounded-3xl p-8 sm:p-10 text-white mt-16 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Stop Leaving Revenue on the Table
            </h3>
            <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-xl">
              Learn how Discount Ninja provides the market-aware middleware layer you need to
              scale your international pricing strategy on Shopify Plus.
            </p>
            <Link to="/demo">
              <button className="bg-[#2FA3A2] hover:bg-[#268a89] text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition-all transform active:scale-95 shadow-lg">
                Talk to a Specialist <ChevronRight size={18} className="ml-2" />
              </button>
            </Link>
          </div>
          {/* Decorative swirl inside CTA */}
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[#2FA3A2]/10 rounded-full blur-3xl"></div>
        </section>
      </>
    ),
  },

  'east-asia-11-11-lunar-new-year': {
    slug: 'east-asia-11-11-lunar-new-year',
    title: 'Precision Pricing: Geo-Targeted 11.11 and Lunar New Year Discount Strategies for East Asia',
    description: 'How to maximize conversion during East Asia\'s biggest sales windows without sacrificing margin or control.',
    date: 'Dec 15, 2025',
    readTime: '12 min read',
    content: (
      <>
        {/* INTRO */}
        <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left">
          East Asia is the undisputed champion of global e-commerce mega sales.
          From the sheer volume of China's Singles' Day (11.11) to the culturally
          vital, multi-week spending spree of Lunar New Year (LNY), these events
          represent your highest potential revenue windows.
        </p>

        <p>
          However, treating China, Singapore, and South Korea as a single entity
          is a fast track to margin erosion. A generic, site-wide 20% discount
          fails to address China's demand for deep, tiered spending rewards or
          Singapore's focus on premium gifting.
        </p>

        <p>
          Success in these high-stakes sales requires surgical precision:
          custom discount rates, unique bundles, and targeted rules tied
          directly to specific Shopify Markets.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          The Scale and Nuance of East Asia's Mega Sales
        </h2>

        <p>
          To dominate East Asian festive sales, merchants must understand that
          customers are motivated by different cultural norms, competitive
          pressures, and purchasing behaviors depending on location.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">
          The Scale of Opportunity
        </h3>

        <p>
          Singles' Day generated an estimated <strong>$202.8 billion USD</strong>{' '}
          in 2024—nearly five times U.S. Cyber Week spending. China is projected
          to reach <strong>$1.53 trillion</strong> in e-commerce sales by 2025,
          while South Korea is the world's fifth-largest e-commerce market.
        </p>

        <p>
          Lunar New Year (Feb 17, 2026) drives massive gifting-focused spending
          across China, Singapore, and South Korea—requiring campaigns centered
          on preparation, not just deep discounts.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">
          Geo-Targeting: Why One Size Doesn't Fit
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

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          Tiered 11.11 Discounts (China)
        </h2>

        <p>
          Singles' Day in China is driven by massive volume and AOV maximization.
          Progressive thresholds consistently outperform flat discounts.
        </p>

        <ul className="bg-gray-50 rounded-xl p-5 space-y-1 text-sm sm:text-base">
          <li>¥500 → 10% off</li>
          <li>¥1200 → 15% off</li>
          <li>¥2500 → 20% off</li>
        </ul>

        <p>
          These rules must apply exclusively to the Mainland China Market.
          Any other market must fail instantly.
        </p>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 pt-10">
          Lunar New Year Gifting (Singapore & Korea)
        </h2>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">
          Singapore: Prosperity Bundles
        </h3>

        <p>
          Buy X Get Y gifting bundles increase AOV while ensuring the free item
          is always the lowest-priced product.
        </p>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 pt-4">
          South Korea: GWP & Flash Sales
        </h3>

        <p>
          Korean shoppers respond better to Gift-With-Purchase mechanics and
          short-window promotions than deep discounts.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 pt-10">Conclusion</h2>

        <p>
          Winning East Asia's festive sales requires moving beyond generic codes
          to geo-targeted, rule-based pricing. Shopify Markets combined with
          advanced discount logic is the only scalable path forward.
        </p>

        {/* CTA */}
        <section className="bg-gray-900 rounded-3xl p-8 sm:p-10 text-white mt-16 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to launch precision discounts?
            </h3>
            <p className="text-gray-400 mb-8 text-base sm:text-lg max-w-xl">
              Automate Singles' Day and Lunar New Year strategies without margin compromise.
            </p>
            <Link to="/demo">
              <button className="bg-[#2FA3A2] hover:bg-[#268a89] text-white font-bold py-4 px-10 rounded-full inline-flex items-center transition-all transform active:scale-95 shadow-lg">
                Schedule a Demo <ChevronRight size={18} className="ml-2" />
              </button>
            </Link>
          </div>
          <div className="absolute top-[-50%] right-[-10%] w-[300px] h-[300px] bg-[#2FA3A2]/10 rounded-full blur-3xl"></div>
        </section>
      </>
    ),
  },
}

export default blogPosts
