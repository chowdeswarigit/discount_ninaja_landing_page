import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Clock, ArrowLeft, Calendar as CalendarIcon, Globe } from "lucide-react";
import Ninja from "@/assets/images/frame.svg";

// UI Components
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Booking States
  const [step, setStep] = useState(1);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeName, setStoreName] = useState(""); 
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 24; hour++) {
      for (let minute of ["00", "30"]) {
        const ampm = hour >= 12 ? "pm" : "am";
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        slots.push(`${displayHour}:${minute}${ampm}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- Scroll Hide / Show ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setShowHeader(false);
      else setShowHeader(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* ---------------- Booking Submit ---------------- */
  const submitBooking = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!selectedDate || !selectedTime) return;

    try {
      setBookingLoading(true);
      const [time, modifier] = [selectedTime.slice(0, -2), selectedTime.slice(-2)];
      let [hours, minutes] = time.split(":").map(Number);
      if (modifier === "pm" && hours < 12) hours += 12;
      if (modifier === "am" && hours === 12) hours = 0;

      const combinedDateTime = new Date(selectedDate);
      combinedDateTime.setHours(hours, minutes, 0, 0);

      const res = await fetch("http://localhost:5000/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,storeName,
          startIso: combinedDateTime.toISOString(),
          durationMinutes: 30,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Booking failed");

      toast({ title: "Booked successfully", description: "Meeting scheduled!" });
      setStep(1);
      setName("");
      setEmail("");
    } catch (err: any) {
      toast({ title: "Error", description: err.message });
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed left-0 right-0 z-50 transition-transform duration-300 px-4 md:px-6 pt-4 md:pt-6",
        showHeader ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Dialog onOpenChange={(open) => !open && setStep(1)}>
        <div className="mx-auto max-w-[1280px] bg-white rounded-[24px] shadow-lg border border-gray-100 px-4 md:px-6 py-3 md:py-4 relative">
          <div className="flex items-center justify-between">
            {/* LEFT: Logo & Nav */}
            <div className="flex items-center gap-6 lg:gap-12">
              <Link to="/" className="hover:scale-105 transition-transform">
                <img src={Ninja} alt="Discount Ninja" className="w-[110px] md:w-[128px]" />
              </Link>

              <nav className="hidden lg:flex gap-8">
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

            {/* RIGHT: Desktop Booking & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <DialogTrigger asChild>
                <Button className="hidden md:flex bg-[#120A0B] hover:bg-[#1a1213] h-[44px] px-[24px] rounded-full text-white text-sm font-semibold">
                  Book a Call
                </Button>
              </DialogTrigger>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-1 text-[#120A0B] focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU DROPDOWN */}
          {isOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 mt-3 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 flex flex-col gap-5">
              <nav className="flex flex-col gap-5">
                <a
                  href="#features"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#120A0B]"
                >
                  Features
                </a>
                <a
                  href="#plans"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-[#120A0B]"
                >
                  Plans
                </a>
                <hr className="border-gray-100" />
                <DialogTrigger asChild>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-left text-lg font-bold underline text-[#120A0B]"
                  >
                    Book a Call
                  </button>
                </DialogTrigger>
              </nav>
            </div>
          )}
        </div>

        {/* BOOKING MODAL CONTENT */}
        <DialogContent className="max-w-4xl p-0 overflow-hidden flex flex-col md:flex-row h-[90vh] md:h-[650px] bg-white">
          {/* LEFT: INFO PANEL */}
          <div className="w-full md:w-[35%] border-r p-8 bg-white overflow-y-auto">
            {step === 2 && (
              <button
                onClick={() => setStep(1)}
                className="mb-6 p-2 rounded-full border border-gray-200 hover:bg-gray-50"
              >
                <ArrowLeft size={18} className="text-blue-600" />
              </button>
            )}
            <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
              Discount Ninja
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-2">
              30 Minute Exploratory Call
            </h2>

            <div className="flex flex-col gap-4 mt-8 text-gray-600 max-w-[520px]">
              <div className="flex items-center gap-3 font-semibold">
                <Clock size={20} className="text-gray-400" />
                <span>30 min</span>
              </div>
              {step === 2 && selectedDate && selectedTime && (
                <div className="flex items-center gap-3 font-semibold text-blue-600">
                  <CalendarIcon size={20} />
                  <span>
                    {selectedTime}, {format(selectedDate, "EEEE, MMMM do, yyyy")}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-3 font-semibold">
                <Globe size={20} className="text-gray-400" />
                <span>India Standard Time</span>
              </div>
              <p className="whitespace-normal break-keep leading-relaxed">This will be an exploratory call to understand your requirements and provide you with the right solution.</p>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE PANEL */}
          <div className="w-full md:w-[65%] p-8 bg-white overflow-y-auto">
            {step === 1 ? (
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Select a Date & Time</h3>
                <div className="flex flex-col lg:flex-row gap-8">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border border-gray-100 mx-auto lg:mx-0"
                  />
                  <div className="flex-1 flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                    {selectedDate ? (
                      <>
                        <p className="text-sm font-bold text-gray-600 mb-2 sticky top-0 bg-white">
                          {format(selectedDate, "EEEE, MMMM d")}
                        </p>
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => {
                              setSelectedTime(time);
                              setStep(2);
                            }}
                            className="w-full py-3 border border-blue-100 text-blue-600 rounded-lg hover:border-blue-600 hover:bg-blue-50 font-bold transition-all"
                          >
                            {time}
                          </button>
                        ))}
                      </>
                    ) : (
                      <p className="text-gray-400 text-center mt-10 italic">
                        Select a date
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={submitBooking} className="flex flex-col gap-6 max-w-[420px]">
                <h3 className="text-xl font-bold">Enter Details</h3>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Name *</label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email *</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
  <label className="text-sm font-bold text-gray-700">Store Name *</label>
  <Input
    type="text"
    placeholder="e.g. My Beauty Shop"
    value={storeName}
    onChange={(e) => setStoreName(e.target.value)}
    required
    className="h-12"
  />
</div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Additional Notes</label>
                  <textarea className="w-full min-h-[120px] p-3 border rounded-md border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none" />
                </div>
                <Button
                  type="submit"
                  disabled={bookingLoading}
                  className="w-fit rounded-full px-10 py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  {bookingLoading ? "Scheduling..." : "Schedule Event"}
                </Button>
              </form>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;