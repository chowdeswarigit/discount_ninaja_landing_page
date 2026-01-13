import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DiscountNinjaAbout from "@/components/aboutus.tsx";

const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <DiscountNinjaAbout />
      <Footer />
    </div>
  );
};

export default About;
