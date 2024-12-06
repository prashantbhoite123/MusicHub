import Link from "next/link"
import { motion } from "framer-motion"

export const AnimatedLearnMoreButton = ({ slug }: { slug: string }) => {
  return (
    <Link href={`/courses/${slug}`} passHref>
      <motion.div
        className="relative group inline-flex items-center justify-center px-6 py-2 text-[1vw] font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg overflow-hidden shadow-lg"
        whileHover={{
          background: "linear-gradient(to right, #16a085, #f4d03f)", // Color transition on hover
        }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 transition-all duration-700 opacity-0 group-hover:opacity-20 rounded-full"></span>
        <span className="relative z-10 group-hover:translate-x-2 transition-transform duration-300 ease-in-out">
          Learn More
        </span>
        <motion.span
          className="relative z-10 ml-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ x: 5 }}
        >
          →
        </motion.span>
      </motion.div>
    </Link>
  )
}
