function EventCard({ event }) {

  return (

    <div className="events-container">

      {/* IMAGE */}
      <div className="event-image">

        <img
          src={event.image}
          alt={event.title}
        />

      </div>

      {/* CONTENT */}
      <div className="event-content">

        <span className="event-badge">
          Próximo Evento
        </span>

        <h2 className="event-title">
          {event.title}
        </h2>

        <div className="event-info">

          <span>{event.date}</span>

          <span>•</span>

          <span>{event.city}</span>

          <span>•</span>

          <span>{event.time}</span>

        </div>

        <p className="event-description">
          {event.description}
        </p>

        <button className="event-button">
          Garantir Ingresso
        </button>

      </div>

    </div>

  )
}

export default EventCard