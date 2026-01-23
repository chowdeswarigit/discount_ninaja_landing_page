import { useState } from "react";
import FooterCTA from "./FooterCTA";
import Ninja from "@/assets/images/frame.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const res = await fetch("http://localhost:5000/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to send email");
      }

      setMessage("🎉 Thanks for subscribing!");
      setEmail("");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#120A0B] mt-[250px] md:mt-[350px] pb-10">

      {/* CTA OVERLAP */}
      <div className="absolute top-[-220px] md:top-[-280px] left-0 w-full z-30 px-4">
        <FooterCTA />
      </div>

      {/* FOOTER CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 text-white pt-[550px] md:pt-[650px] lg:pt-[350px]">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 lg:gap-x-8 mb-20">

          {/* BRAND */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={Ninja}
              alt="Discount Ninja"
              className="w-40 mb-6"
            />
            <p className="text-[#A7A7A7] text-base leading-relaxed max-w-[320px]">
              The only discounting app that stays awake with you.
              Empowering Shopify merchants to scale globally.
            </p>
          </div>

          {/* LINKS */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-6 text-lg">Platform</h4>
              <ul className="text-[#A7A7A7] text-sm space-y-4">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/changelog" className="hover:text-white">Changelog</Link></li>
              </ul>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="text-[#A7A7A7] text-sm space-y-4">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-4 flex flex-col gap-6 items-center md:items-start">
            <h4 className="font-bold text-lg">Join our newsletter</h4>

            <div className="flex flex-col sm:flex-row w-full bg-white/[0.03] border border-white/10 rounded-[24px] p-1.5 gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-white text-sm outline-none px-5 py-3 sm:py-0"
              />

              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="bg-[#8B7DFF] text-white h-[48px] px-8 rounded-full text-sm font-bold hover:bg-[#7a6ce6] transition disabled:opacity-60"
              >
                {loading ? "Sending..." : "Subscribe"}
              </button>
            </div>

            {message && (
              <p className="text-sm text-gray-400">{message}</p>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-10 text-xs text-[#666666] text-center md:text-left">
          © {new Date().getFullYear()} Discount Ninja. Built for Shopify merchants.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
