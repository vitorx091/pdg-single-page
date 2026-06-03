import { useEffect, useState } from "react"

import axios from "axios"

import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, EffectFade } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-fade"

import EventCard from "../components/ui/EventCard"

function EventsSection() {

  const [events, setEvents] = useState([])

  useEffect(() => {

    async function fetchEvents() {

      try {

        const response = await axios.get(
          "http://localhost:5000/api/events"
        )

        setEvents(response.data)

      } catch (error) {

        console.log(error)

      }

    }

    fetchEvents()

  }, [])

  return (

    <section className="events-section">

      <Swiper

        modules={[Autoplay, EffectFade]}

        effect="fade"

        fadeEffect={{
          crossFade: true,
        }}

        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}

        speed={1200}

        loop={true}

      >

        {events.map((event) => (

          <SwiperSlide key={event._id}>

            <EventCard event={event} />

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default EventsSection