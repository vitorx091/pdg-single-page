import Navbar from "../../components/layout/Navbar"

import HeroSection from "../../sections/HeroSection"
import EventsSection from "../../sections/EventsSection"
import ExperienceSection from "../../sections/ExperienceSection"
import InstagramSection from "../../sections/InstagramSection"
import Footer from "../../sections/Footer"

function Home() {

    return (

        <main className="bg-[#0B0B0B] min-h-screen">

            <Navbar />

            <HeroSection />

            <EventsSection />

            <ExperienceSection />

            <InstagramSection/>

            <Footer/>

        </main>

    )
}

export default Home