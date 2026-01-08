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

          <h3 className="text-xl md:text-[40px] lg:text-[44px] leading-tight font-bold text-[#120A0B] max-w-[500px]">
            Scaling is hard. <br className="hidden md:block" /> Support shouldn’t be.
          </h3>

          <p className="mt-4 text-[#454140] text-base md:text-lg max-w-[420px]">
            The only discounting app that stays awake with you.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
  {["Scale globally", "Expert setup", "7-day support"].map((item) => (
    <div key={item} className="flex items-center gap-2">
      {/* Black circle with white tick mark */}
      <div className="w-[18px] h-[18px] rounded-full bg-black flex items-center justify-center flex-shrink-0">
        <span className="text-white text-[10px] leading-none font-bold">✓</span>
      </div>
      <span className="text-[#120A0B] text-sm font-semibold">{item}</span>
    </div>
  ))}
</div>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 md:mt-8 w-full sm:w-auto px-4 sm:px-0">
  <button className="bg-black text-white px-6 py-3 md:px-10 md:py-4 rounded-full font-400 w-full sm:w-auto hover:bg-neutral-900 transition-all shadow-lg text-sm md:text-base">
    Start Your 7 Day Free Trial
  </button>
            <a className="underline font-bold  text- [8px]text-[#120A0B] hover:text-black transition-colors" href="#">
              Contact Us
            </a>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        {/* ================= RIGHT CONTENT ================= */}
<div className="relative flex items-center justify-center lg:justify-end min-h-[200px] md:min-h-[250px] lg:h-full mt-[-20px] md:mt-0"> 
  {/* Added mt-[-20px] to pull the image section up on mobile */}
  
  <img
    src={ProductCard}
    alt="Product"
    className="relative lg:absolute top-[-30px] md:top-0 lg:right-0 w-[280px] md:w-[350px] lg:w-[320px] h-auto shadow-2xl rounded-2xl z-10"
  />
  {/* Changed top-0 to top-[-30px] on mobile to reduce the gap */}

  {/* ... rest of your code */}


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
           {/* DECORATIVE HANDWRITTEN LABEL: Hidden on mobile/tablet to save space */}
<div className="hidden lg:block absolute top-[20px] left-[-20px] xl:left-[40px] rotate-[-8deg] z-20 pointer-events-none">
  <h3 className="font-['Kalam',_cursive] font-bold text-2xl xl:text-3xl text-[#120A0B] leading-none">
    Scale <br /> Globally
  </h3>
  <img 
    src={Arrow} 
    alt="Hand-drawn arrow" 
    className="w-14 md:w-16 mt-2 ml-10 rotate-[15deg] opacity-90" 
  />
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;