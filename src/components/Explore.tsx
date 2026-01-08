import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <section className="w-full bg-white pt-20 md:pt-[70px] px-4 md:px-6 lg:px-[30px] pb-20 md:pb-[80px]">
      {/* ================= OUTER CONTAINER ================= */}
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          min-h-[824px]
          bg-[#2FA3A2]
          rounded-[25px]
          relative
          overflow-hidden
          flex
          flex-col
          items-center
          px-4
          py-12
          md:py-0
        "
      >
        {/* Decorative background circles - Hidden on small mobile to reduce clutter */}
        <div className="hidden sm:block absolute right-[-200px] top-[80px] w-[500px] h-[500px] rounded-full bg-white/10" />
        <div className="hidden sm:block absolute right-[-120px] bottom-[-120px] w-[420px] h-[420px] rounded-full bg-white/10" />

        {/* ================= TOP BADGE ================= */}
        <span className="md:mt-[56px] bg-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
          Explore Now
        </span>

        {/* ================= TITLE ================= */}
        <h2 className="mt-6 font-satoshi font-bold text-3xl md:text-[40px] md:leading-[52px] text-white text-center max-w-[800px]">
          Start bundling with discounts today
        </h2>

        {/* ================= INPUT ROW ================= */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4 w-full max-w-[600px] md:max-w-none justify-center">
          <input
            type="text"
            placeholder="Enter your Shopify domain..."
            className="
              w-full
              md:w-[420px]
              h-[52px]
              rounded-full
              bg-transparent
              border
              border-white
              px-5
              text-white
              placeholder-white/70
              outline-none
              focus:ring-2
              focus:ring-white/30
            "
          />

          <button
            className="
              w-full
              md:w-auto
              h-[52px]
              px-7
              rounded-full
              bg-black
              text-white
              font-medium
              hover:bg-neutral-900
              transition-colors
            "
          >
            Show Me How To Grow
          </button>
        </div>

        {/* ================= INNER WHITE CONTAINER ================= */}
        <div
          className="
            mt-12
            w-full
            max-w-[845px]
            h-auto
            lg:h-[406px]
            bg-[#FAF9F7]
            rounded-[32px]
            p-6
            md:p-10
            flex
            flex-col
            lg:flex-row
            gap-8
            shadow-xl
          "
        >
          {/* ================= LEFT CONTAINER ================= */}
          <div
            className="
              w-full
              lg:w-[250px]
              h-auto
              bg-white
              rounded-[24px]
              p-5
              flex
              flex-col
              gap-4
              shadow-sm
            "
          >
            <span className="inline-flex items-center justify-center bg-[#2FA3A2] text-white w-full lg:w-[179px] h-[39px] rounded-full text-sm font-medium">
              Ninja Sales Sprint
            </span>

            <p className="text-sm leading-relaxed text-[#454140]">
              Kick off the month with Global Launch Week, using market-specific tiered discounts to capture international revenue with surgical precision. Pivot mid-month to a VIP Appreciation campaign.
            </p>
          </div>

          {/* ================= RIGHT CONTAINER ================= */}
          <div className="flex-1 flex flex-col gap-5 text-[#120A0B]">
            {/* Row 1 */}
            <div className="flex items-center gap-4">
              <span className="bg-white px-3 py-1.5 rounded-md text-sm font-bold shadow-sm">Give</span>
              <span className="bg-[#2FA3A2] text-white px-4 py-1.5 rounded-full text-sm font-medium">20% Off</span>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-4">
              <span className="bg-white px-3 py-1.5 rounded-md text-sm font-bold shadow-sm">On</span>
              <span className="border border-neutral-300 bg-white px-4 py-1.5 rounded-md text-sm font-medium">Specific Products ▾</span>
            </div>

            {/* Product Pills */}
            <div className="flex gap-2 flex-wrap">
              {["Silk Saree", "Rose Gold Saree", "Yellow Georgette"].map((item) => (
                <span key={item} className="bg-[#FFD86F] px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white px-3 py-1.5 rounded-md text-sm font-bold shadow-sm">On</span>
              <span className="border border-neutral-300 bg-white px-4 py-1.5 rounded-md text-sm">Cart Subtotal ▾</span>
              <span className="border border-neutral-300 bg-white px-2.5 py-1 rounded-full text-xs">&</span>
              <span className="border border-neutral-300 bg-white px-4 py-1.5 rounded-md text-sm">Product in cart ▾</span>
            </div>

            {/* Values */}
            <div className="flex items-center gap-4">
              <span className="bg-[#2FA3A2] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">₹120</span>
              <span className="bg-[#FFD86F] px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">Saree</span>
            </div>

            {/* Market */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-white px-3 py-1.5 rounded-md text-sm font-bold shadow-sm">Market is</span>
              {["India", "UAE", "Singapore"].map((m) => (
                <span key={m} className="bg-[#FFD86F] px-3.5 py-1.5 rounded-full text-xs font-medium uppercase">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA BUTTON ================= */}
        <Button
          className="
            mt-12
            mb-8
            md:mb-0
            bg-[#FC3A83]
            hover:bg-[#e03475]
            text-white
            px-9
            py-6
            rounded-full
            text-base
            font-semibold
            transition-transform
            active:scale-95
            w-full
            md:w-auto
          "
        >
          Install Now on Shopify
        </Button>
      </div>
    </section>
  );
};

export default Explore;