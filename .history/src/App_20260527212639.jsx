import Navbar from "./components/layout/Navbar"
import EventsSection from "./sections/EventsSection"
import HeroSection from "./sections/HeroSection"
import InstagramSection from "./sections/InstagramSection"
import TicketsSection from "./sections/TickestsSection"
import Footer from "./sections/Footer"


function App() {
  return (
    <main className="bg-[#0B0B0B] min-h-screen">
      
      <Navbar />
      <HeroSection/>
      <EventsSection/>
      <TicketsSection/>
      <InstagramSection/>
      <Footer/>

    </main>
  )
}

export default App