import { useState } from "react";
import { Button } from "@/components/ui/button";
import Ninja from "@/assets/images/frame.svg";
import { Menu, X } from "lucide-react"; // Install lucide-react if you haven't
            import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative top-4 md:top-6 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-[1280px] w-full bg-white rounded-[20px] md:rounded-[24px] shadow-lg px-4 md:px-[20px] py-3 md:py-[16px] border border-gray-100">
          <div className="flex items-center justify-between">
            
            {/* LEFT: Logo + Nav */}

<div className="flex items-center gap-6 lg:gap-12">

  {/* Logo → Home */}
  <Link
    to="/"
    className="flex items-center hover:scale-105 transition-transform duration-300"
  >
    <img
      src={Ninja}
      alt="Discount Ninja"
      className="w-[110px] md:w-[128px] h-auto object-contain"
    />
  </Link>

  {/* Desktop Nav */}
  <nav className="hidden lg:flex items-center gap-8">
    {["Features", "Plans"].map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        className="text-sm font-medium text-[#120A0B] hover:text-[#5952FF] transition-colors"
      >
        {item}
      </a>
    ))}
  </nav>
</div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-3 md:gap-6">
              <button className="hidden sm:block text-sm font-bold underline text-[#120A0B] hover:opacity-70 transition-opacity">
                View Demo
              </button>

              <Button
                className="bg-[#120A0B] hover:bg-[#1a1213] h-[40px] md:h-[44px] px-4 md:px-[24px] rounded-full text-white text-xs md:text-sm font-semibold transition-all active:scale-95"
              >
                Get Started <span className="hidden md:inline ml-1">for Free</span>
              </Button>

              {/* Mobile Menu Toggle */}
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1 text-[#120A0B]"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE NAVIGATION MENU */}
          {isOpen && (
            <div className="lg:hidden absolute top-[100%] left-0 right-0 mt-2 mx-4 p-6 bg-white rounded-[20px] shadow-xl border border-gray-100 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
              <nav className="flex flex-col gap-4">
                <a onClick={() => setIsOpen(false)} href="#features" className="text-lg font-medium py-2 border-b border-gray-50">Features</a>
                <a onClick={() => setIsOpen(false)} href="#plans" className="text-lg font-medium py-2 border-b border-gray-50">Plans</a>
                {/* <a onClick={() => setIsOpen(false)} href="#contacts" className="text-lg font-medium py-2 border-b border-gray-50">Contacts</a> */}
                <button className="text-left text-lg font-bold underline text-[#120A0B] py-2">View Demo</button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;