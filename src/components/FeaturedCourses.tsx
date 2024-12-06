"use client"

import Link from "next/link"

import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"
import { AnimatedLearnMoreButton } from "./ui/AnimatedLearnMoreButton "

interface Course {
  id: number
  title: string
  slug: string
  description: string
  price: number
  instructor: string
  isFeatured: boolean
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  )

  return (
    <div className="bg-gray-900 py-12">
      <div>
        <div className="text-center">
          <h2 className="text-base text-green-400 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="my-5 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col gap-y-3 items-center text-center flex-grow">
                  <p className="text-lg sm:text-xl text-teal-600 mt-4 mb-2 dark:text-green-400">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <AnimatedLearnMoreButton slug={course.slug} />
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className=" mt-20 text-center">
        <Link href={"/courses"}>
          <button className="relative inline-block bg-gradient-to-br from-green-400 via-yellow-500 to-orange-500 text-black font-extrabold py-3 px-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:scale-110 hover:skew-x-3 hover:rotate-2 group overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-70"></span>

            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 rounded-full transition-all duration-700 blur-lg animate-[shine_2s_infinite]"></span>

            <span className="relative z-10">View All Courses</span>
          </button>
        </Link>
      </div>
    </div>
  )
}
