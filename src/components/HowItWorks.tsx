import phoneImg from "@/assets/images/phone.png";
import  HowImage from "@/assets/images/howitworks.png";
const HowItWorks = () => {
  return (
    // Reduced section padding from pt-10 to pt-4
    <section className="pt-4 md:pt-8 pb-20 px-4 md:px-6 flex justify-center bg-white">
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-[1200px] min-h-[600px] lg:h-[720px] bg-[#7C7CDF] rounded-[40px] overflow-hidden flex flex-col lg:flex-row">
        
        {/* TOP CONTENT: Adjusted top-0 to pull text up */}
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

        {/* LOGIC TREE AREA: Reduced pt-300px to pt-[240px] to move tree up */}
        <div className="relative flex-1 flex flex-col justify-center items-start pl-6 md:pl-20 pt-[240px] lg:pt-[100px] pb-10 z-20">
          
          

          {/* ROW 2: ON -> PRODUCTS */}
          <div className="relative flex items-start mb-10">
            
          </div>

          {/* ROW 3: ON -> CART + AND */}
          <div className="relative flex items-start mb-2">
            <img src={
              HowImage
            } />
            </div>
          
        </div>

        {/* PHONE IMAGE AREA */}
        <div className="relative flex-1 flex justify-center lg:justify-end items-end h-full">
          <img
            src={phoneImg}
            alt="App Preview"
            className="-mt-6  w-[300px] md:w-[450px] lg:w-[580px] xl:w-[620px] lg:absolute lg:right-[-50px] lg:bottom-[-40px] drop-shadow-[0_35px_60px_rgba(0,0,0,0.4)] z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;