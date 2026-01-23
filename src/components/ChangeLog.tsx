'use client'

import React from 'react'

const changelogData = [
  {
    version: '2.3.0',
    date: 'Aug 30, 2024',
    title: 'Streamlined onboarding experience',
    points: [
      'Dark Mode option added for users who prefer a darker interface.',
      'Task dependencies are now visually indicated with clearer links and status updates.',
      'Minor bug fixes related to notifications not being sent for task updates.',
    ],
  },
  {
    version: '2.2.0',
    date: 'Aug 12, 2024',
    title: 'Introduced a built-in chat feature',
    points: [
      'Collaboration tools enhanced with new file-sharing capabilities.',
      'Fixed issues with task sorting by priority.',
      'Revamped notification system with customizable settings.',
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
            Streamline your workflow, manage projects, and empower your team
            with marketwise — the all-in-one task management solution.
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

                {/* Left column */}
                <div>
                  <h3 className="text-2xl font-bold">
                    Version {item.version}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    {item.date}
                  </p>
                </div>

                {/* Right column */}
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
