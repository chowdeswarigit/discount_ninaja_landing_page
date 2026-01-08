import Star from "@/assets/images/star.svg";
import Flourish from "@/assets/images/flourish.png";
import Numerana from "@/assets/images/num.png";
import IWasASari from "@/assets/images/i-was-a-sari.png";

const testimonials = [
  {
    title: "Discounts Ninja is a total game changer.",
    description: "MarketWise Discounts Ninja has been a game-changer for our multi-country fashion store.",
    company: "I was a Sari",
    country: "India",
    logo: IWasASari,
  },
  {
    title: "It's a total game-changer for our company so far.",
    description: "MarketWise Discounts Ninja has been a game-changer for our multi-country fashion store.",
    company: "I was a Sari",
    country: "India",
    logo: IWasASari,
  },
  {
    title: "Best of the Apps we have ever used!",
    description: "This is one of the best apps we have ever used! No other discount app came close.",
    company: "Numerana",
    country: "Mexico",
    logo: Numerana,
  },
  {
    title: "MarketWise Discount Ninja has been a game changer.",
    description: "As a global sustainable marketplace, our promotions finally work perfectly.",
    company: "Flourish",
    country: "India",
    logo: Flourish,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white pt-20 md:pt-[30px] px-6 md:px-[30px] pb-10 md:pb-[40px]">
      <div className="mx-auto max-w-[1920px]">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-10 md:mb-[39px] mt-20px">
          <span className="inline-flex bg-[#FFD86F] px-[16px] py-[4px] rounded-full text-[12px] md:text-[14px] font-medium mb-4 md:mb-6">
            Testimonials
          </span>

          <h2 className="font-satoshi font-bold text-3xl md:text-[48px] leading-tight md:leading-[58px] text-[#120A0B] mb-4">
            Our success stories
          </h2>

          <p className="font-satoshi text-sm md:text-[16px] text-[#454140] max-w-[520px] mx-auto">
            Real stories from merchants who stopped losing revenue to pricing bugs
            and started scaling with precision.
          </p>
        </div>

        {/* ================= SLIDER CONTAINER ================= */}
        {/* On mobile: we allow horizontal scrolling. On desktop: we keep your overflow-hidden */}
        <div className="mx-auto max-w-[1200px] overflow-x-auto md:overflow-hidden no-scrollbar">
          
          {/* Responsive Logic:
              - Mobile: no translation, start from the left.
              - Desktop: keep your exact md:translate-x-[-200px] for the "cut-off" look.
          */}
          <div className="flex gap-4 md:gap-[16px] translate-x-0 md:translate-x-[-200px] pb-4 md:pb-0">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  w-[280px] md:w-[384px]
                  min-h-[350px] md:h-[407px]
                  bg-white
                  border
                  border-[#E8E7E4]
                  rounded-[20px]
                  pt-8 md:pt-[40px]
                  pb-8 md:pb-[40px]
                  px-6 md:px-[35px]
                  flex
                  flex-col
                  justify-between
                  flex-shrink-0
                "
              >
                {/* Stars */}
                <div className="flex gap-[6px] mb-4 md:mb-[20px]">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={Star} alt="star" className="w-4 md:w-[20px]" />
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-satoshi font-bold text-lg md:text-[20px] text-[#120A0B] mb-[12px]">
                    {item.title}
                  </h3>

                  <p className="font-satoshi text-sm md:text-[16px] text-[#454140] leading-relaxed md:leading-[26px]">
                    {item.description}{" "}
                    <span className="font-semibold underline cursor-pointer">
                      Read More
                    </span>
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-[12px] mt-6 md:mt-[32px]">
                  <div
                    className={`
                      w-12 h-12 md:w-[56px] md:h-[56px]
                      rounded-full
                      flex
                      items-center
                      justify-center
                      flex-shrink-0
                      ${
                        item.company === "Numerana"
                          ? "bg-[#5B356C]"
                          : "border border-[#E8E7E4] bg-white"
                      }
                    `}
                  >
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="w-[36px] md:w-[46px] h-[15px] object-contain"
                    />
                  </div>

                  <div>
                    <p className="font-satoshi font-semibold text-xs md:text-[14px] text-[#120A0B]">
                      {item.company}
                    </p>
                    <p className="font-satoshi text-xs md:text-[14px] text-[#454140]">
                      {item.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;