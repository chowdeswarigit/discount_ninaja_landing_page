"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Will this app slow down my storefront during high-traffic sales?",
    answer:
      "Not at all. Marketwise is built on Shopify’s latest infrastructure (Functions), meaning the discount logic runs on Shopify’s servers, not yours. Your site stays fast, and your checkout remains stable even during BFCM or flash sales.",
  },
  {
    question:
      'I’ve had "price display bugs" with other apps. How is Marketwise different?',
    answer:
      "Marketwise uses Shopify Functions instead of script-based hacks, ensuring price accuracy across product pages, cart, and checkout.",
  },
  {
    question: "Can I get help setting up complex discount rules?",
    answer:
      "Yes. Our support team is happy to help you configure advanced rules and workflows.",
  },
  {
    question: "What happens if I need help on a Saturday?",
    answer:
      "We provide weekend support so you’re never blocked during important sales periods.",
  },
  {
    question: "Does it work with my existing currency converter?",
    answer:
      "Yes. Marketwise is compatible with Shopify Markets and currency conversion tools.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-white px-[30px] pt-20 md:pt-[30px] pb-[120px]">
      <div className="mx-auto max-w-[1200px] text-center">
        {/* Badge */}
        <span className="inline-flex items-center justify-center bg-[#FFD86F] px-[16px] py-[4px] rounded-full text-[14px] font-medium mb-6">
          FAQs
        </span>

        {/* Title */}
        <h2 className="font-satoshi font-bold text-2xl leading-[58px] text-[#120A0B] mb-4">
          Frequently asked questions
        </h2>

        {/* Subtitle */}
        <p className="font-satoshi text-[16px] text-[#454140] max-w-[640px] mx-auto mb-[72px]">
          Everything you need to know about setting up, scaling, and succeeding
          with Marketwise Discount Ninja.
        </p>

        {/* FAQ List */}
        <div className="mx-auto max-w-[900px] text-left">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#E5E5E5]">
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  className="w-full flex items-center justify-between py-[24px] text-left"
                >
                  <span className="font-satoshi font-700 text-[18px] text-[#120A0B]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 text-[#120A0B] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="pb-[24px]">
                    <p className="font-satoshi text-[16px] leading-[27px] text-[#454140]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* See More */}
        <div className="mt-[48px]">
          <button className="font-satoshi font-medium text-[16px] text-[#120A0B] underline">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
