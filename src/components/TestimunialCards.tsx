"use client"

import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
const testimonials = [
  {
    quote:
      "Learning music here has been a transformative experience. The instructors are knowledgeable, patient, and inspiring. My skills have improved tremendously.",
    name: "Sarah Thompson",
    title: "Student - Guitar Beginner",
  },
  {
    quote:
      "The courses offered are engaging and cover everything from theory to performance. The flexibility of both online and in-person classes is perfect for balancing my schedule.",
    name: "James Carter",
    title: "Piano Enthusiast",
  },
  {
    quote:
      "Joining the community performances was the highlight of my learning journey. Performing live boosted my confidence and passion for music.",
    name: "Emily Davis",
    title: "Violin Student",
  },
  {
    quote:
      "The music theory lessons have given me a new perspective on songwriting. I now understand how to bring emotions to life through my compositions.",
    name: "Michael Brown",
    title: "Aspiring Songwriter",
  },
  {
    quote:
      "I never thought I would be able to learn an instrument at my age, but the instructors here proved me wrong. They made the process fun, interactive, and incredibly rewarding.",
    name: "Linda Evans",
    title: "Drum Student",
  },
]

const TestimunialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of Success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={testimonials} />
        </div>
      </div>
    </div>
  )
}

export default TestimunialCards
