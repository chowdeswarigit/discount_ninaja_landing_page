import numerana from "@/assets/images/numerana.png";
import flourish from "@/assets/images/flourish.png";
import iWasASari from "@/assets/images/i-was-a-sari.png";

import performanceIcon from "@/assets/images/performance.svg";
import priceIcon from "@/assets/images/price.svg";
import revenueIcon from "@/assets/images/revenue.svg";

// UPDATED: Removed fixed width/height. Added flex-1 to allow cards to grow/shrink.
const cardClass = `
  w-full
  max-w-[384px]
  min-h-[274px]
  bg-white
  border
  border-[#E3E2E2]
  rounded-[32px]
  py-[32px]
  px-[24px]
  md:py-[39px]
  md:px-[26px]
  flex
  flex-col
  items-center
  gap-[16px]
  text-center
  transition-all
  hover:shadow-lg
`;

const Trusted = () => {
  return (
    <section className="pt-20 md:pt-[30px] pb-16 md:pb-24 bg-white">
      {/* ================= TRUSTED BY ================= */}
      <div className="mx-auto max-w-[1280px] px-[20px]">
        {/* Adjusted padding and gap for mobile */}
        <div className="mx-auto max-w-[1100px] bg-[#F9F8F6] rounded-[30px] md:rounded-[40px] py-8 md:py-[48px] px-6 md:px-[40px] text-center">
          <p className="font-satoshi text-[16px] md:text-[20px] leading-relaxed font-medium text-[#120A0B] mb-6">
            Trusted by Global Merchants
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <img src={numerana} alt="Numerana" className="h-[18px] md:h-[24px] opacity-80" />
            <img src={flourish} alt="Flourish" className="h-[22px] md:h-[28px] opacity-80" />
            <img src={iWasASari} alt="I was a sari" className="h-[18px] md:h-[24px] opacity-80" />
          </div>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="mt-16 md:mt-20 mx-auto max-w-[1280px] px-[20px] text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-[#FFD86F] rounded-[16px] px-[16px] py-[2px] text-[13px] md:text-[14px] font-satoshi font-medium text-[#120A0B] mb-6">
          Why Choose Us
        </div>

        {/* Heading: Scaled text sizes for mobile/desktop */}
        <h2 className="font-satoshi font-bold text-[32px] md:text-[56px] leading-[1.2] md:leading-[67.2px] tracking-[-1px] md:tracking-[-1.5px] text-[#120A0B] mb-4">
          Built for Global Reliability
        </h2>

        {/* Subheading */}
        <p className="font-satoshi font-normal text-[16px] md:text-[18px] leading-[26px] md:leading-[30.6px] text-[#454140] max-w-[560px] mx-auto">
          High-stability discounting that stays fast and accurate, even during
          peak global holiday rushes.
        </p>

        {/* ================= FEATURE CARDS ================= */}
        {/* Changed gap and centered items for mobile */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {/* Card 1 */}
          <div className={cardClass}>
            <img src={performanceIcon} alt="Performance" className="h-[40px] w-[40px] md:h-[48px] md:w-[48px]" />
            <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] leading-[30px] md:leading-[34px] text-[#120A0B]">
              24/7 Peak Performance
            </h3>
            <p className="font-satoshi text-[14px] leading-[22px] text-[#454140]">
              Engineered for high stability to ensure your discounts never fail
              during flash sales or holiday rushes.
            </p>
          </div>

          {/* Card 2 */}
          <div className={cardClass}>
            <img src={priceIcon} alt="Precision" className="h-[40px] w-[40px] md:h-[48px] md:w-[48px]" />
            <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] leading-[30px] md:leading-[34px] text-[#120A0B]">
              Precision Price Display
            </h3>
            <p className="font-satoshi text-[14px] leading-[22px] text-[#454140]">
              Advanced syncing technology ensures your regional discounts and
              currency displays are always accurate.
            </p>
          </div>

          {/* Card 3 */}
          <div className={cardClass}>
            <img src={revenueIcon} alt="Revenue" className="h-[40px] w-[40px] md:h-[48px] md:w-[48px]" />
            <h3 className="font-satoshi font-bold text-[18px] md:text-[20px] leading-[30px] md:leading-[34px] text-[#120A0B]">
              Zero Revenue Leakage
            </h3>
            <p className="font-satoshi text-[14px] leading-[22px] text-[#454140]">
              Our robust infrastructure is built to prevent the technical
              glitches that cause lost sales during peak periods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;