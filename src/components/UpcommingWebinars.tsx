"use client"

import Link from "next/link"

import { HoverEffect } from "./ui/card-hover-effect"

const UpcommingWebinars = () => {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ]

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link href={"/webinars"}>
            <button className="relative inline-block bg-gradient-to-br from-green-400 via-yellow-500 to-orange-500 text-black font-extrabold py-3 px-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:scale-110 hover:skew-x-3 hover:rotate-2 group overflow-hidden">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-70"></span>

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 rounded-full transition-all duration-700 blur-lg animate-[shine_2s_infinite]"></span>

              <span className="relative z-10">View All Webinars</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcommingWebinars
