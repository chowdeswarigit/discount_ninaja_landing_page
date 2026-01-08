import phoneImg from "@/assets/images/phone.png";

const HowItWorks = () => {
  return (
    <section className="pt-20 md:pt-[30px] pb-12 md:pb-20 lg:pb-24 px-4 md:px-6 flex justify-center bg-white">
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1100px] min-h-fit lg:h-[784px] bg-[#7C7CDF] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col">
        
        {/* TOP CONTENT */}
        <div className="text-center pt-10 md:pt-16 lg:pt-[64px] px-6 z-20">
          <span className="inline-block bg-white text-[#120A0B] text-[10px] md:text-xs lg:text-sm font-bold px-4 py-1.5 rounded-full mb-4 md:mb-6 uppercase tracking-wider">
            How it works
          </span>
          <h2 className="font-satoshi font-bold text-2xl md:text-3xl lg:text-[40px] leading-tight text-white">
            Engineering the Perfect Sale
          </h2>
          <p className="mt-4 max-w-[600px] mx-auto font-satoshi text-sm md:text-base lg:text-[16px] text-white/90">
            Build complex, multi-layered discount logic in seconds with our intuitive
            “Ninja Flow” builder.
          </p>
        </div>

        {/* CONTENT AREA: Responsive Grid/Flex */}
        <div className="relative flex flex-col lg:block flex-1">
          
          {/* LOGIC FLOW AREA: Stays readable on Tablet */}
          <div className="lg:absolute lg:left-[60px] lg:top-[60px] xl:left-[80px] w-full lg:w-[500px] px-6 py-10 lg:p-0 z-20">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              
              {/* ROW 1: GIVE */}
              <div className="flex items-center">
                <span className="bg-white text-black px-3 py-1 rounded-md text-xs md:text-sm font-bold shadow-sm">Give</span>
                <div className="w-8 md:w-12 h-[1.5px] bg-white/40" />
                <span className="bg-[#2FA3A2] text-white px-4 py-2 rounded-full text-xs md:text-sm font-medium border border-white/20">20% Off</span>
              </div>

              {/* ROW 2: ON -> PRODUCTS */}
              <div className="relative">
                <div className="absolute left-[15px] md:left-[18px] top-8 w-[1.5px] h-10 md:h-12 bg-white/40" />
                <div className="flex items-center">
                  <span className="bg-white text-black px-3 py-1 rounded-md text-xs md:text-sm font-bold shadow-sm">On</span>
                  <div className="w-6 md:w-8 h-[1.5px] bg-white/40" />
                  <span className="bg-[#2FA3A2] text-white px-3 py-2 rounded-md text-xs md:text-sm border border-white/20">Specific Products ▾</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-5 ml-[15px] md:ml-[18px] pl-6 md:pl-10 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 md:w-10 h-[1.5px] bg-white/40" />
                  {["Silk Saree", "Rose Gold"].map((tag) => (
                    <span key={tag} className="bg-[#FFD86F] text-black px-3 py-1 rounded-full text-[11px] md:text-sm font-semibold shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ROW 3: ON -> CART RULES */}
              <div className="relative">
                <div className="absolute left-[15px] md:left-[18px] top-8 w-[1.5px] h-10 md:h-12 bg-white/40" />
                <div className="flex items-center flex-wrap gap-y-3">
                  <span className="bg-white text-black px-3 py-1 rounded-md text-xs md:text-sm font-bold shadow-sm">On</span>
                  <div className="w-6 md:w-8 h-[1.5px] bg-white/40" />
                  <span className="bg-[#2FA3A2] text-white px-3 py-2 rounded-md text-xs md:text-sm border border-white/20 whitespace-nowrap">Cart Subtotal ▾</span>
                  <div className="mx-2 w-7 h-7 md:w-8 md:h-8 rounded-full border border-black bg-white flex items-center justify-center text-black font-bold text-xs">
                    &
                  </div>
                  <span className="bg-[#2FA3A2] text-white px-3 py-2 rounded-md text-xs md:text-sm border border-white/20 whitespace-nowrap">Product in cart ▾</span>
                </div>
                {/* Secondary tags */}
                <div className="flex gap-4 mt-5 ml-[15px] md:ml-[18px] pl-6 md:pl-10 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 md:w-10 h-[1.5px] bg-white/40" />
                  <span className="bg-[#2FA3A2] text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-medium border border-white/20">₹120</span>
                  <span className="bg-[#FFD86F] text-black px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-sm">Saree</span>
                </div>
              </div>

              {/* ROW 4: MARKET */}
              <div className="flex items-center">
                <span className="bg-white text-black px-3 py-1 rounded-md text-xs md:text-sm font-bold shadow-sm">Market is</span>
                <div className="w-6 md:w-12 h-[1.5px] bg-white/40" />
                <div className="flex gap-2">
                  {["India", "UAE"].map((m) => (
                    <span key={m} className="bg-[#FFD86F] text-black px-3 py-1 rounded-full text-[11px] md:text-sm font-bold uppercase tracking-tight">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* PHONE IMAGE: Moves below on tablet, sits right on desktop */}
          <div className="relative lg:absolute right-0 lg:right-[20px] xl:right-[40px] bottom-[-20px] md:bottom-[-40px] lg:bottom-[-20px] flex justify-center lg:block w-full lg:w-auto">
            <img
              src={phoneImg}
              alt="Phone Preview"
              className="w-[280px] md:w-[350px] lg:w-[480px] xl:w-[550px] rotate-[-2deg] drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-transform duration-500 hover:rotate-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;