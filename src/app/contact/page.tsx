import { Meteors } from "@/components/ui/meteors"
import Link from "next/link"

const page = () => {
  return (
    <div className="sm:mt-28 md:mt-36 h-full w-full">
      <h1 className="text-6xl text-center">Contact Us</h1>
      <div className="my-8">
        <div className="flex flex-col gap-7 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="dark:bg-black border w-[60%] p-3 rounded-[0.5rem] sm:border-2 border-slate-600"
          />
          <textarea
            name=""
            placeholder="write your message"
            id=""
            className="bg-black p-3 border w-[60%] rounded-[0.5rem] resize-none sm:border-2 border-slate-600"
          ></textarea>
          <Link href={"/courses"}>
            <button className="relative inline-block bg-gradient-to-br from-green-400 via-yellow-500 to-orange-500 text-black font-extrabold py-3 px-8 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:scale-110 hover:skew-x-3 hover:rotate-2 group overflow-hidden">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-70"></span>

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-50 rounded-full transition-all duration-700 blur-lg animate-[shine_2s_infinite]"></span>

              <span className="relative z-10">View More</span>
            </button>
          </Link>
        </div>
      </div>
      <Meteors number={20} />
    </div>
  )
}

export default page
