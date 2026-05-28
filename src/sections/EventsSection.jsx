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
            crossFade:true,
        }}

        autoplay={{
          delay:7000,
          disableOnInteraction:false,
        }}

        speed={1200}

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