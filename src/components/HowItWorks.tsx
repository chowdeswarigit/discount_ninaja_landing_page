import phoneImg from "@/assets/images/phone.png";
import Image from "@/assets/images/image.png"
const HowItWorks = () => {
  return (
    <section className="pt-20 md:pt-32 pb-20 px-4 md:px-6 flex justify-center bg-white">
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1200px] min-h-[600px] lg:h-[720px] bg-[#7C7CDF] rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
        
        {/* TOP CONTENT */}
        <div className="absolute top-0 left-0 w-full text-center pt-10 md:pt-16 px-6 z-30">
          <span className="inline-block bg-white text-[#120A0B] text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            How it works
          </span>
          <h2 className="font-bold text-3xl md:text-5xl leading-tight text-white mb-4">
            Engineering the Perfect Sale
          </h2>
          <p className="max-w-[650px] mx-auto text-sm md:text-lg text-white/80">
            Build complex, multi-layered discount logic in seconds with our intuitive
            “Ninja Flow” builder.
          </p>
        </div>

        {/* LOGIC TREE AREA */}
        <div className="relative flex-1 flex flex-col justify-center items-start pl-6 md:pl-20 pt-[300px] lg:pt-[150px] pb-20 z-20">
          
          {/* ROW 1: GIVE */}
          <div className="flex items-center mb-10">
            <span className="bg-white text-black px-4 py-1 rounded-md text-xs font-black min-w-[50px] text-center uppercase">Give</span>
            <div className="w-10 md:w-16 h-[2px] bg-white/40" />
            <span className="bg-[#2FA3A2] text-white px-6 py-2 rounded-full text-sm font-bold border border-white/20">20% Off</span>
          </div>

          {/* ROW 2: ON -> PRODUCTS */}
          <div className="relative flex items-start mb-12">
            {/* Vertical line from GIVE to this ON */}
            <div className="absolute left-[25px] top-[-40px] w-[2px] h-[40px] bg-white/40" />
            
            <span className="bg-white text-black px-4 py-1 rounded-md text-xs font-black min-w-[50px] text-center uppercase">On</span>
            <div className="w-6 md:w-8 h-[2px] bg-white/40 mt-4" />
            
            <div className="flex flex-col gap-3">
              <span className="bg-transparent text-white px-4 py-2 rounded-md text-xs border border-white/40 w-fit">Specific Products ▾</span>
              <div className="flex flex-wrap gap-2">
                {["Silk Saree", "Rose Gold Saree", "Yellow Georgette"].map((tag) => (
                  <span key={tag} className="bg-[#FFD86F] text-black px-4 py-1.5 rounded-full text-[10px] md:text-xs font-extrabold whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 3: ON -> CART + AND */}
          <div className="relative flex items-start mb-10">
            {/* Vertical line from previous ON to this ON */}
            <div className="absolute left-[25px] top-[-110px] w-[2px] h-[110px] bg-white/40" />
            
            <span className="bg-white text-black px-4 py-1 rounded-md text-xs font-black min-w-[50px] text-center uppercase">On</span>
            <div className="w-6 md:w-8 h-[2px] bg-white/40 mt-4" />
            
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                 <span className="bg-transparent text-white px-4 py-2 rounded-md text-xs border border-white/40">Cart Subtotal ▾</span>
                 <div className="w-7 h-7 rounded-full border border-white/60 flex items-center justify-center text-white font-black text-xs">&</div>
                 <span className="bg-transparent text-white px-4 py-2 rounded-md text-xs border border-white/40">Product in cart ▾</span>
              </div>
              <div className="flex gap-2">
                <span className="bg-[#2FA3A2] text-white px-4 py-1.5 rounded-full text-[10px] font-bold border border-white/20">₹120</span>
                <span className="bg-[#FFD86F] text-black px-4 py-1.5 rounded-full text-[10px] font-black">Saree</span>
              </div>
            </div>
          </div>

          {/* ROW 4: MARKET IS */}
          <div className="relative flex items-center">
            {/* Vertical line down to Market */}
            <div className="absolute left-[25px] top-[-100px] w-[2px] h-[100px] bg-white/40" />
            {/* AND node connector */}
            <div className="absolute left-[13px] top-[-55px] w-6 h-6 rounded-full border border-white/60 bg-[#7C7CDF] flex items-center justify-center text-white font-black text-[10px] z-10">&</div>
            
            <span className="bg-white text-black px-4 py-1 rounded-md text-xs font-black min-w-[80px] text-center uppercase">Market is</span>
            <div className="w-6 md:w-12 h-[2px] bg-white/40" />
            <div className="flex gap-2">
              {["India", "UAE", "Singapore"].map((m) => (
                <span key={m} className="bg-[#FFD86F] text-black px-3 py-1 rounded-full text-[10px] font-black uppercase">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PHONE IMAGE AREA */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-end h-full">
          <img
            src={phoneImg}
            alt="App Preview"
            className="w-[300px] md:w-[450px] lg:w-[580px] xl:w-[620px] lg:absolute lg:right-[-50px] lg:bottom-[-40px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;