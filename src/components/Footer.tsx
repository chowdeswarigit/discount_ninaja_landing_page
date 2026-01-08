import FooterCTA from "./FooterCTA";
import TaskHubLogo from "@/assets/images/taskhub.png";

const Footer = () => {
  return (
    // mt-[250px] for mobile creates the "gap" needed so the CTA doesn't cover the FAQ
    <footer className="relative bg-[#120A0B] mt-[250px] md:mt-[300px] lg:mt-[250px] pb-10">
      
      {/* THE OVERLAP: This stays absolute */}
      <div className="absolute top-[-200px] md:top-[-220px] lg:top-[-250px] left-0 w-full z-30 px-4 md:px-0">
        <FooterCTA />
      </div>

      {/* FOOTER CONTENT: High pt-[500px] for mobile keeps logo/news visible */}
      <div className="max-w-[1200px] mx-auto px-6 text-white pt-[480px] md:pt-[520px] lg:pt-[350px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={TaskHubLogo} 
              alt="TaskHub" 
              className="w-40 h-auto object-contain mb-6" 
            />
            <p className="text-[#A7A7A7] text-base leading-relaxed max-w-[320px]">
              The only discounting app that stays awake with you. Empowering your team to scale globally.
            </p>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-6 text-white text-lg tracking-tight">Platform</h4>
              <ul className="text-[#A7A7A7] text-sm space-y-4">
                <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">Changelog</li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-6 text-white text-lg tracking-tight">Company</h4>
              <ul className="text-[#A7A7A7] text-sm space-y-4">
                <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center md:items-start">
            <h4 className="font-bold text-lg text-white tracking-tight">Join our newsletter</h4>
            <div className="flex flex-col sm:flex-row w-full bg-white/[0.03] border border-white/10 rounded-[24px] p-1.5 gap-2 transition-all">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white text-sm outline-none px-5 py-3 sm:py-0 min-w-0"
              />
              <button className="bg-[#8B7DFF] text-white h-[48px] px-8 rounded-full text-sm font-bold hover:bg-[#7a6ce6] transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-[#666666] text-xs">
          <p>© 2024 TaskHub, Inc. All rights reserved.</p>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">X</div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">FB</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;