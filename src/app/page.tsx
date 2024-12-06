import FeaturedCourses from "@/components/FeaturedCourses"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Instructurs from "@/components/Instructurs"
import TestimunialCards from "@/components/TestimunialCards"
import UpcommingWebinars from "@/components/UpcommingWebinars"
import WhtChooseUs from "@/components/WhtChooseUs"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhtChooseUs />
      <TestimunialCards />
      <UpcommingWebinars />
      <Instructurs />
      <Footer />
    </main>
  )
}
