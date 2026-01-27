'use client'

import React from 'react'

const changelogData = [
  {
    version: '2.0.0',
    date: 'Jan 29, 2025',
    title: 'Advanced discounting & UI improvements',
    points: [
      'Added the ability to create order-level discounts, allowing merchants to combine order discounts with other discount types.',
      'Introduced shipping discounts with support for full or partial discounts based on shipping type (Express, Standard, etc.).',
      'Redesigned the Discount Lists UI to show more detailed information at a glance.',
      'Added options to delete or disable discounts directly from the dashboard.',
      'Improved overall performance across discount evaluation.',
      'Updated the UI to be fully mobile-friendly.',
      'Fixed various bugs and stability issues.',
    ],
  },
  {
    version: '1.0.0',
    date: 'Sep 26, 2024',
    title: 'Initial release',
    points: [
      'Target discounts to specific Shopify Markets such as UK, USA, UAE, and more.',
      'Create automatic discounts based on product tags, types, vendors, and collections.',
      'Set customer-specific discounts using customer tags and order count history.',
      'Apply cart rules based on total order quantity and purchase value thresholds.',
      'Schedule discounts for future campaigns with a comprehensive rule builder.',
    ],
  },
]

const ChangeLogPage = () => {
  return (
    <div className="bg-[#fcfcfd] text-[#1a1a1a] font-satoshi">

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-1 text-sm font-semibold rounded-full bg-yellow-100 text-yellow-800">
            Changelog
          </span>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Latest updates and <br /> improvements
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Stay up to date with the latest improvements, features, and fixes in Marketwise.
          </p>
        </div>
      </section>

      {/* ================= CHANGELOG LIST ================= */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto space-y-10">
          {changelogData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-gray-100"
            >
              <div className="grid md:grid-cols-3 gap-8">

                {/* Left */}
                <div>
                  <h3 className="text-2xl font-bold">
                    Version {item.version}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.date}
                  </p>
                </div>

                {/* Right */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-xl font-semibold">
                    {item.title}
                  </h4>

                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ChangeLogPage
