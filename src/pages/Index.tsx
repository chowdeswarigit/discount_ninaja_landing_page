import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Trusted from "@/components/Trusted"
// Background image
import heroBg from "@/assets/images/background.jpg";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Explore from "@/components/Explore";
import FAQSection from "@/components/Faq";
console.log("Index page loaded");
const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* ===== Shared Background for Header + Hero ===== */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <Header />
        <Hero />
      </div>

      {/* ===== Rest of the page (normal background) ===== */}
      <main>
                <Trusted/>

        <Features />
        <HowItWorks/>
        <Pricing />
        <Testimonials/>
        <Explore/>
        <FAQSection/>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
