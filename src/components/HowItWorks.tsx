import phoneImg from "@/assets/images/phone.png";
import HowImage from "@/assets/images/howitworks.png";
import SwirlImage from "@/assets/images/spring.png"; 

const HowItWorks = () => {
  return (
    <section className="pt-4 md:pt-8 pb-20 px-4 md:px-6 flex justify-center bg-white">
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1200px] min-h-[600px] lg:h-[720px] bg-[#7C7CDF] rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
        
        {/* TOP CONTENT */}
        <div className="absolute top-0 left-0 w-full text-center pt-8 md:pt-12 px-6 z-30">
          <span className="inline-block bg-white text-[#120A0B] text-[10px] md:text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
            How it works
          </span>
          <h2 className="font-bold text-3xl md:text-5xl leading-tight text-white mb-3">
            Engineering the Perfect Sale
          </h2>
          <p className="max-w-[650px] mx-auto text-sm md:text-lg text-white/80">
            Build complex, multi-layered discount logic in seconds with our intuitive
            “Ninja Flow” builder.
          </p>
        </div>

        {/* LEFT AREA: Logic Flow */}
        <div className="relative flex-1 flex flex-col justify-center items-center lg:items-start pl-0 lg:pl-20 pt-[240px] lg:pt-[120px] pb-10 z-20">
          <div className="relative w-full max-w-[500px] lg:max-w-none px-6 lg:px-0">
             <img 
               src={HowImage} 
               alt="Discount Logic Flow" 
               className="w-full h-auto object-contain"
             />
          </div>
        </div>

        {/* RIGHT AREA: Phone + Inverted & Rotated Spring */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-end h-full">
          
          {/* THE SPRING/SWIRL IMAGE: Added 'invert' and 'rotate' */}
          <img 
            src={SwirlImage}
            alt=""
            className="absolute right-[-75%] bottom-[-30%] w-[10%] lg:w-[150%] max-w-none opacity-40 lg:opacity-80 pointer-events-none z-10 rotate-[270deg]"
          />

          {/* THE PHONE IMAGE */}
          <img
            src={phoneImg}
            alt="App Preview"
            className="w-[280px] md:w-[400px] lg:w-[520px] xl:w-[580px] relative lg:absolute lg:right-6 lg:bottom-[-30px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;