import { Button } from "@/components/ui/button";

// card images
import productRules from "@/assets/images/product-data-rules 1.png";
import customerLoyalty from "@/assets/images/customer-loyalty1.png";
import targetMarkets from "@/assets/images/target-markets1.png";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-[216px] lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-[20px]">
        {/* MAIN GRID: Stack on mobile (flex-col), side-by-side on LG */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_432px] gap-12 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col gap-6 max-w-[560px] text-center lg:text-left items-center lg:items-start">
            <p className="text-sm font-medium text-[#120A0B]">
              No credit card required. Setup in 2 minutes.
            </p>

            {/* Responsive Text: text-4xl on mobile, text-6xl on desktop */}
            <h1 className="text-2xl md:text-5xl lg:text-[56px] leading-[1.1] font-extrabold text-foreground">
              Discount Smarter,
              <br />
              Sell Globally.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground">
              Stop generic discounting. Set custom rules for every Shopify
              Market you sell in. Zero code, total control.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mt-4 w-full sm:w-auto">
              <Button className="bg-[#ff4b8b] hover:bg-[#e9447e] h-[52px] px-[30px] rounded-full text-white font-semibold w-full sm:w-auto">
                Install On Shopify
              </Button>

              <button className="text-base font-bold underline">
                View Demo
              </button>
            </div>
          </div>

          {/* ================= RIGHT IMAGE CARDS ================= */}
          {/* We use scale and overflow-visible to ensure cards look good on smaller screens */}
          <div className="relative flex flex-col items-center lg:items-end justify-center w-full max-w-[450px] lg:max-w-none mx-auto">
            {/* TOP CARD */}
            <img
              src={productRules}
              alt="Product Data Rules"
              className="w-[280px] md:w-[310px] h-auto shadow-xl rounded-lg"
            />

            {/* BOTTOM TWO CARDS */}
            <div className="flex gap-[8px] md:gap-[10px] mt-2 w-full justify-center lg:justify-end">
              <img
                src={customerLoyalty}
                alt="Customer Loyalty Discounts"
                className="w-[45%] lg:w-[200px] h-auto shadow-xl rounded-lg"
              />

              <img
                src={targetMarkets}
                alt="Target Markets"
                className="w-[48%] lg:w-[211px] h-auto shadow-xl rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;