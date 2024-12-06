"use client"
import React from "react"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

const content = [
  {
    title: "Learn from Expert Instructors",
    description:
      "Our experienced instructors are professional musicians with years of teaching expertise. Learn the art of music through personalized lessons and proven teaching methodologies.",
  },
  {
    title: "Explore Instrument Courses",
    description:
      "Master a variety of instruments, including piano, guitar, violin, drums, and more. Our structured courses cater to all skill levels - beginner, intermediate, and advanced.",
  },
  {
    title: "Online & Offline Classes",
    description:
      "We offer both online and offline classes to suit every student's learning preference. Enjoy flexibility, real-time interaction, and personalized schedules tailored to your needs.",
  },
  {
    title: "Join Our Community Performances",
    description:
      "Participate in recitals, workshops, and community performances to showcase your talent and gain real-world experience performing live.",
  },
  {
    title: "Music Theory & Composition",
    description:
      "Learn the fundamentals of music theory, from scales and chords to composition. Dive into the techniques that make music beautiful, learn songwriting, and express your creativity.",
  },
]

const WhtChooseUs = () => {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhtChooseUs
