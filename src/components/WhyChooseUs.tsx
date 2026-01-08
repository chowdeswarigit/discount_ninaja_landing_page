import { Zap, Phone, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      iconBg: "bg-brand-yellow",
      title: "24/7 Peak Performance",
      description: "Engineered for high stability to ensure your discounts never fail during flash sales or holiday rushes.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      iconBg: "bg-brand-purple",
      title: "Precision Price Display",
      description: "Advanced syncing technology ensures your regional discounts and currency displays are always accurate.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      iconBg: "bg-brand-purple",
      title: "Zero Revenue Leakage",
      description: "Our robust infrastructure is built to prevent the technical glitches that cause lost sales during peak periods.",
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-2xl font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Built for Global Reliability
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            High-stability discounting that stays fast and accurate, even during peak global holiday rushes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className={`w-14 h-14 ${benefit.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 text-foreground`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
