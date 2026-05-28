import Navbar from "./components/layout/Navbar"
import EventsSection from "./sections/EventsSection"
import HeroSection from "./sections/HeroSection"


function App() {
  return (
    <main className="bg-[#0B0B0B] min-h-screen">
      
      <Navbar />
      <HeroSection/>
      <EventsSection/>
      <TicketsSection/>

    </main>
  )
}

export default App