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
           <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-card transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-card transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-card transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;