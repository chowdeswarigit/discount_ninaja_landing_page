import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketWiseChangelog from "@/components/ChangeLog.tsx";
import Blog from "./Blog";
const Changelog= () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <MarketWiseChangelog />
      <Footer />
    </div>
  );
};

export default Changelog;
