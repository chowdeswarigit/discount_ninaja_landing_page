import { Button } from "@/components/ui/button";
import TickMark from "@/assets/images/tick.svg";
import Arrow from "@/assets/images/arrow.png";

const Pricing = () => {
  const features = [
    "Unlimited Markets",
    "Unlimited Campaigns",
    "All Rule Types Included",
    "Weekend Support",
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-white pt-20 md:pt-[10px] px-6 md:px-[30px] pb-[40px] md:pb-[60px]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* ================= HEADER ================= */}
        <div className="text-center mb-[48px]">
          <span className="inline-flex items-center justify-center bg-[#FFD86F] px-[16px] py-[4px] rounded-full text-[14px] font-medium mb-6">
            Pricing plan
          </span>

          <h2 className="font-satoshi font-bold text-3xl md:text-[48px] md:leading-[58px] text-[#120A0B] mb-4">
            Simple, Transparent Pricing
          </h2>

          <p className="font-satoshi text-[16px] text-[#454140] max-w-[520px] mx-auto">
            No hidden fees. No volume limits. Just one flat rate for every merchant.
          </p>
        </div>

        {/* ================= FEATURES ROW ================= */}
        {/* FIXED: grid-cols-2 for mobile/tablet, flex for desktop */}
        <div className="mx-auto max-w-[1040px] grid grid-cols-2 lg:flex lg:justify-between items-center gap-y-6 gap-x-4 mb-[56px] px-2 md:px-0">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-[10px] justify-start lg:justify-center">
              <img src={TickMark} alt="tick" className="w-5 h-5 flex-shrink-0" />
              <span className="font-satoshi text-[14px] md:text-[16px] font-medium text-[#120A0B]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* ================= PRICING CARDS ================= */}
        {/* FIXED: Changed md:flex-row to lg:flex-row to give tablet (md) more room to stack */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-[40px]">
          
          {/* ================= MONTHLY PLAN ================= */}
          <div className="w-full max-w-[500px] bg-[#FAF9F7] rounded-[32px] p-6 md:p-[40px] flex flex-col justify-between min-h-[363px]">
            <div className="w-full bg-white rounded-[24px] px-[16px] py-[24px] shadow-sm">
              <span className="inline-flex items-center justify-center bg-[#2FA3A2] text-white px-6 py-2 rounded-full text-[14px] font-medium mb-4">
                Monthly Plan
              </span>

              <p className="font-satoshi text-[16px] text-[#454140] mb-4">
                For small teams & startups
              </p>

              <div className="flex items-end gap-2">
                <span className="font-satoshi font-bold text-3xl md:text-[40px] text-[#120A0B]">
                  $9.00
                </span>
                <span className="text-[#454140] text-[16px] mb-1">
                  per month
                </span>
              </div>
            </div>

            <Button className="w-full h-[56px] rounded-full bg-[#120A0B] text-white text-[16px] font-semibold mt-8">
              Select Plan
            </Button>
          </div>

          {/* ================= ANNUAL PLAN ================= */}
          <div className="w-full max-w-[500px] bg-[#FAF9F7] rounded-[32px] p-6 md:p-[40px] flex flex-col justify-between relative min-h-[363px]">
            
            {/* FIXED BADGE POSITIONING FOR MEDIUM DEVICES */}
            <div className="absolute -top-10 md:-top-12 right-2 md:right-0 lg:-right-6 flex flex-col items-center z-20">
                <img
                    src={Arrow}
                    alt="arrow"
                    className="hidden lg:block w-[76px] mb-[-15px] mr-12 rotate-[5deg]"
                />
                <span className="inline-flex items-center justify-center bg-[#5952FF] text-white text-[12px] md:text-[14px] font-bold px-5 py-2.5 rounded-full rotate-[-8deg] shadow-lg whitespace-nowrap border-2 border-white">
                    Save 10%
                </span>
            </div>

            <div className="w-full bg-white rounded-[24px] px-[16px] py-[24px] shadow-sm">
              <span className="inline-flex items-center justify-center bg-[#2FA3A2] text-white px-6 py-2 rounded-full text-[14px] font-medium mb-4">
                Annual Plan
              </span>

              <p className="font-satoshi text-[16px] text-[#454140] mb-4">
                For large teams & enterprises
              </p>

              <div className="flex items-end gap-2">
                <span className="font-satoshi font-bold text-3xl md:text-[40px] text-[#120A0B]">
                  $99.00
                </span>
                <span className="text-[#454140] text-[16px] mb-1">
                  per year
                </span>
              </div>
            </div>

            <Button className="w-full h-[56px] rounded-full bg-[#120A0B] text-white text-[16px] font-semibold mt-8">
              Select Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;