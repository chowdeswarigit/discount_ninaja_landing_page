import { Zap, Phone, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      // Using hex codes to ensure consistency regardless of tailwind.config.js
      iconBg: "bg-[#FFD86F]", 
      title: "24/7 Peak Performance",
      description: "Engineered for high stability to ensure your discounts never fail during flash sales or holiday rushes.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      iconBg: "bg-[#5952FF]", 
      title: "Precision Price Display",
      description: "Advanced syncing technology ensures your regional discounts and currency displays are always accurate.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      iconBg: "bg-[#5952FF]",
      title: "Zero Revenue Leakage",
      description: "Our robust infrastructure is built to prevent the technical glitches that cause lost sales during peak periods.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#FFD86F] rounded-full px-6 py-2 text-[13px] font-bold text-black mb-6">
            Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#120A0B] mb-4">
            Built for Global Reliability
          </h2>
          <p className="text-[#454140] max-w-xl mx-auto text-base">
            High-stability discounting that stays fast and accurate, even during peak global holiday rushes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-[#E8E7E4]"
            >
              <div className={`w-14 h-14 ${benefit.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 text-black`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#120A0B] mb-3">
                {benefit.title}
              </h3>
              
              {/* Fixed: Forced 16px using text-base and removed conflicting muted classes */}
<p className="text-[#454140] !text-[16px] leading-relaxed">                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;