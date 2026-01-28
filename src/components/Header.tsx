import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Ninja from "@/assets/images/frame.svg";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down → hide
        setShowHeader(false);
      } else {
        // scrolling up → show
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed left-0 right-0 z-50
        transition-transform duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="mx-auto px-4 md:px-6 pt-4 md:pt-6">
        <div className="mx-auto max-w-[1280px] w-full bg-white rounded-[20px] md:rounded-[24px] shadow-lg px-4 md:px-[20px] py-3 md:py-[16px] border border-gray-100">
          <div className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-6 lg:gap-12">
              <Link
                to="/"
                className="flex items-center hover:scale-105 transition-transform"
              >
                <img
                  src={Ninja}
                  alt="Discount Ninja"
                  className="w-[110px] md:w-[128px] h-auto"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-8">
                {["Features", "Plans"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-[#120A0B] hover:text-[#5952FF]"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 md:gap-6">
              <button className="hidden sm:block text-sm font-bold underline hover:opacity-70">
                View Demo
              </button>

              <Button className="bg-[#120A0B] hover:bg-[#1a1213] h-[40px] md:h-[44px] px-4 md:px-[24px] rounded-full text-white text-xs md:text-sm font-semibold">
                Get Started <span className="hidden md:inline ml-1">for Free</span>
              </Button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-white rounded-[20px] shadow-xl border border-gray-100">
              <nav className="flex flex-col gap-4">
                <a onClick={() => setIsOpen(false)} href="#features" className="text-lg font-medium">
                  Features
                </a>
                <a onClick={() => setIsOpen(false)} href="#plans" className="text-lg font-medium">
                  Plans
                </a>
                <button className="text-left text-lg font-bold underline">
                  View Demo
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
