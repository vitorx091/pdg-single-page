import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

import { events } from "../data/events"

import EventCard from "../components/ui/EventCard"

function EventsSection() {

  return (

    <section className="events-section">

      <Swiper

        modules={[Autoplay, EffectFade]}

        effect="fade"

        fadeEffect={{
            
        }}

        autoplay={{
          delay:5000,
          disableOnInteraction:false,
        }}

        loop={true}

      >

        {events.map((event) => (

          <SwiperSlide key={event.id}>

            <EventCard event={event} />

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default EventsSection