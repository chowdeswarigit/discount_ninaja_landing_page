import Arrow from "@/assets/images/arrow1.png";
import ProductCard from "@/assets/images/product-rules.png";
import SmallCard1 from "@/assets/images/loyalty.png";
import SmallCard2 from "@/assets/images/target-markets.png";
import Tick from "@/assets/images/tick.svg";

const FooterCTA = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-6">
      <div
        className="
          relative
          bg-[#FFD86F]
          w-full
          max-w-[1200px]
          rounded-[40px]
          px-6 md:px-[60px]
          py-12 lg:py-[70px] 
          grid
          grid-cols-1 lg:grid-cols-2
          gap-12
          z-40
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
          <span className="bg-white px-4 py-1 rounded-full w-fit text-sm font-medium mb-4">
            Get Started
          </span>

          <h3 className="text-3xl md:text-[40px] lg:text-[44px] leading-tight font-bold text-[#120A0B] max-w-[500px]">
            Scaling is hard. <br className="hidden md:block" /> Support shouldn’t be.
          </h3>

          <p className="mt-4 text-[#454140] text-base md:text-lg max-w-[420px]">
            The only discounting app that stays awake with you.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
            {["Scale globally", "Expert setup", "7-day support"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <img src={Tick} alt="tick" className="w-[18px] h-[18px]" />
                <span className="text-[#120A0B] text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <button className="bg-black text-white px-10 py-4 rounded-full font-bold w-full sm:w-auto hover:bg-neutral-900 transition-all shadow-lg">
              Start Your 7 Day Free Trial
            </button>
            <a className="underline font-bold text-[#120A0B] hover:text-black transition-colors" href="#">
              Contact Us
            </a>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="relative flex items-center justify-center lg:justify-end min-h-[300px] lg:h-full">
          {/* Main Card */}
          <img
            src={ProductCard}
            alt="Product"
            className="relative lg:absolute top-0 lg:right-0 w-[280px] md:w-[350px] lg:w-[320px] h-auto shadow-2xl rounded-2xl z-10"
          />

          {/* Floating Small Cards - Desktop Only */}
          <div className="hidden lg:block">
            <img
              src={SmallCard1}
              alt="Loyalty"
              className="absolute bottom-[-50px] right-[190px] w-[180px] h-auto z-20 shadow-xl"
            />
            <img
              src={SmallCard2}
              alt="Markets"
              className="absolute bottom-[-50px] right-[-10px] w-[180px] h-auto z-20 shadow-xl"
            />
            {/* Arrow & Label */}
            <div className="absolute top-[-20px] left-[-40px] rotate-[-5deg]">
               <h3 className="font-['Kalam'] font-bold text-2xl text-[#120A0B]">Scale Globally</h3>
               <img src={Arrow} alt="Arrow" className="w-12 mt-1 ml-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;