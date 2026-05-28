function EventsSection() {
  return (
    <section className="events-section">

      <div className="events-container">

        {/* LEFT */}
        <div className="event-image">

          <img
            src="/images/event-banner.jpg"
            alt="PDG Sunset"
          />

        </div>

        {/* RIGHT */}
        <div className="event-content">

          <span className="event-badge">
            Próximo Evento
          </span>

          <h2 className="event-title">
            PDG SUNSET
          </h2>

          <div className="event-info">

            <span>12 JUL</span>

            <span>•</span>

            <span>JOÃO PESSOA</span>

            <span>•</span>

            <span>17H</span>

          </div>

          <p className="event-description">
            Uma experiência premium de pagode,
            sunset e energia em um dos eventos
            mais exclusivos da cidade.
          </p>

          <button className="event-button">
            Garantir Ingresso
          </button>

        </div>

      </div>

    </section>
  )
}

export default EventsSection