'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, ChevronRight } from 'lucide-react'

const blogs = [
  {
    slug: '/blogs/beauty-brands-personalized-discounts', // ✅ New Blog Added
    category: 'Discount Campaigns',
    date: 'Jan 29, 2026',
    readTime: '11 min read',
    title: 'How Beauty Brands Can Use Personalized Discounts to Boost Repeat Purchases Across Regions',
    excerpt: 'Acquiring beauty customers is costly. Learn how to use purchase behavior, replenishment cycles, and regional market dynamics to transform one-time buyers into loyal advocates.'
  },
  {
    slug: '/blogs/why-shopify-discounts-fall-short',
    category: 'Ecosystem',
    date: 'Jan 22, 2026',
    readTime: '10 min read',
    title: 'Why Shopify Discounts Fall Short for Multi-Market and Global Stores',
    excerpt: 'Executing localized pricing is the hidden technical bottleneck for Shopify Plus merchants. Learn why native tools struggle with multi-market complexity.'
  },
  {
    slug: '/blogs/precision-pricing-east-asia',
    category: 'Seasonal & Festive Discount Campaigns',
    date: 'Jan 15, 2025',
    readTime: '14 min read',
    title:
      'Precision Pricing: Geo-Targeted 11.11 and Lunar New Year Discount Strategies for East Asia',
    excerpt:
      'East Asia is the epicenter of global e-commerce mega sales. From Singles’ Day to Lunar New Year, this guide explains how to win high-revenue windows using geo-targeted pricing and Shopify Markets.'
  },
  // {
  //   slug: '/blogs/east-asia-mega-sales-scale',
  //   category: 'Seasonal & Festive Discount Campaigns',
  //   date: 'Dec 17, 2025',
  //   readTime: '7 min read',
  //   title: 'The Scale and Nuance of East Asia’s Mega Sales',
  //   excerpt:
  //     'Singles’ Day generated $202.8B in 2024 alone. Learn how cultural buying behavior in China, Singapore, and Korea shapes pricing, promotions, and campaign structure.'
  // },
  // {
  //   slug: '/blogs/tiered-1111-discounts-china',
  //   category: 'Seasonal & Festive Discount Campaigns',
  //   date: 'Dec 17, 2025',
  //   readTime: '6 min read',
  //   title: 'Maximizing AOV with Tiered 11.11 Discounts in China',
  //   excerpt:
  //     'Chinese shoppers are trained to spend more to unlock rewards. This article breaks down progressive discount tiers, margin protection, and Mainland China–only rules.'
  // },
  // {
  //   slug: '/blogs/lunar-new-year-gifting-strategy',
  //   category: 'Seasonal & Festive Discount Campaigns',
  //   date: 'Dec 17, 2025',
  //   readTime: '6 min read',
  //   title: 'Lunar New Year Gifting Campaigns for Singapore and Korea',
  //   excerpt:
  //     'LNY is about gifting, prosperity, and symbolism. Learn how Buy X Get Y bundles, GWPs, and market-specific scheduling drive higher AOV during the festive season.'
  // },
  // {
  //   slug: '/blogs/prevent-discount-leakage',
  //   category: 'Pricing Intelligence',
  //   date: 'Dec 17, 2025',
  //   readTime: '5 min read',
  //   title:
  //     'Preventing Discount Leakage with Shopify Markets and Advanced Rules',
  //   excerpt:
  //     'When discounts leak across borders, margins disappear. This guide explains geo-enforcement, rule stacking, and why native Shopify discounts fall short.'
  // },
]

const BlogListPage = () => {
  return (
    <div className="bg-[#FCFCFC] min-h-screen text-gray-800 font-satoshi mt-24">

      {/* ================= PAGE HEADER ================= */}
      <header className="pt-24 pb-14 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Marketwise Blog
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">
          Insights on seasonal campaigns, geo-targeted pricing, and Shopify Markets —
          all derived from real merchant use cases.
        </p>
      </header>

      {/* ================= BLOG LIST ================= */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-10">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            to={blog.slug}
            className="group block border border-gray-100 rounded-2xl p-8 bg-white hover:shadow-lg transition-all"
          >
            {/* Meta */}
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
              {blog.category} · {blog.date}
            </p>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4 group-hover:underline">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {blog.excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span className="flex items-center">
                <Clock size={14} className="mr-2" />
                {blog.readTime}
              </span>

              <span className="flex items-center text-gray-600 font-bold">
                Read article <ChevronRight size={16} className="ml-1" />
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default BlogListPage