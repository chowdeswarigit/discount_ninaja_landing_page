import React, { useState } from "react";

// Image Imports
import targetMarketsImg from "@/assets/images/target-markets1.png";
import productRulesImg from "@/assets/images/product-data-rules 1.png";
import loyaltyImg from "@/assets/images/loyalty.png";
import cartRulesImg from "@/assets/images/cart-rules.png";
import schedulingImg from "@/assets/images/scheduling.png";
import reliabilityImg from "@/assets/images/reliability.png";

const BG_COLORS = ["#7C7CDF", "#2FA3A2", "#FFD86F"];

const FEATURES = [
  {
    title: "Target discounts to specific Shopify Markets",
    subtitle: "Sell globally with localized precision",
    description: "Marketwise Discount Ninja allows you to target specific Shopify Markets such as the UK, USA, and UAE. Tailor your global strategy by creating unique discount rates.",
    image: targetMarketsImg,
  },
  {
    title: "Create automatic discounts based on product data",
    subtitle: "Automate offers using tags and types",
    description: "Easily build automatic discounts and codes that match your inventory. You can set rules based on specific product tags, types, or vendors.",
    image: productRulesImg,
  },
  {
    title: "Set customer-specific loyalty discounts",
    subtitle: "Reward your audience based on their history",
    description: "By leveraging customer tags and order count history, you can create exclusive discounts for your most loyal shoppers.",
    image: loyaltyImg,
  },
  {
    title: "Apply smart cart-level rules",
    subtitle: "Drive higher AOVs with threshold-based offers",
    description: "Encourage customers to add more to their carts by applying rules based on total order quantity and purchase value.",
    image: cartRulesImg,
  },
  {
    title: "Schedule future discount campaigns",
    subtitle: "Plan your sales calendar with confidence",
    description: "Stay ahead of holiday rushes by scheduling discounts in advance using the comprehensive rule builder.",
    image: schedulingImg,
  },
  {
    title: "Reliability built for peak periods",
    subtitle: "Eliminate bugs and revenue leakage",
    description: "Experience peace of mind with an app engineered for high stability. Our robust infrastructure features advanced syncing technology.",
    image: reliabilityImg,
  },
];

const Features = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Global Precision", "Sales Automation", "Reliability"];

  return (
    <section id="features" className="pt-20 md:pt-[10px] pb-12 md:pb-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1140px] px-6">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-12 md:mb-[96px]">
          <div className="inline-flex items-center bg-[#FFD86F] rounded-full px-4 py-1 text-[13px] font-bold text-black mb-6">
            Features
          </div>
          <h2 className="font-satoshi font-bold text-2xl md:text-[56px] leading-tight md:leading-[67.2px] tracking-tight text-[#120A0B] mb-4">
            One App, Infinite Ways <br className="hidden md:block" /> to Scale Globally
          </h2>
          <p className="font-satoshi text-[16px] md:text-[18px] leading-relaxed text-[#454140] max-w-[620px] mx-auto mb-10">
            From local promotions to VIP rewards, deploy smart campaigns across
            every Shopify Market with ease.
          </p>

          {/* TABS - Added horizontal scroll for mobile */}
          <div className="flex justify-start md:justify-center overflow-x-auto no-scrollbar pb-4 md:pb-0">
            <div className="flex bg-[#F1F0EE] p-2 rounded-full whitespace-nowrap">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`
                    px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[12px] md:text-sm font-medium transition-all
                    ${activeTab === index ? "bg-[#FC3A83] text-white shadow-lg" : "text-black hover:bg-gray-200"}
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ================= FEATURE LIST ================= */}
        <div className="flex flex-col gap-16 md:gap-[140px]">
          {FEATURES.map((feature, index) => {
            const isImageFirst = index % 2 === 0;
            const bgColor = BG_COLORS[index % 3];

            return (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 ${!isImageFirst ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* IMAGE CONTAINER - Dynamic height for mobile, fixed for desktop */}
                <div 
                  className="w-full lg:w-[535px] h-[300px] sm:h-[400px] md:h-[482px] rounded-[24px] md:rounded-[32px] flex items-end justify-center overflow-hidden"
                  style={{ backgroundColor: bgColor }}
                >
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-[90%] md:w-[520.77px] h-auto md:h-[365.28px] object-contain block" 
                  />
                </div>

                {/* CONTENT BLOCK - Scaled text for mobile */}
                <div className="w-full lg:w-[501px] flex flex-col gap-4 md:gap-6 text-center lg:text-left">
                  <h3 className="font-satoshi font-bold text-[24px] md:text-[40px] leading-tight text-[#120A0B]">
                    {feature.title}
                  </h3>
                  <p className="font-satoshi font-medium text-[18px] md:text-[24px] text-[#120A0B]/80 leading-snug">
                    {feature.subtitle}
                  </p>
                  <p className="font-satoshi text-[14px] md:text-[16px] leading-relaxed text-[#454140]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;