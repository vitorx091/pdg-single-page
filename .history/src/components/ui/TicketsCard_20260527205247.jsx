function TicketCard({ ticket }) {

  return (

    <div
      className={`
      ticket-card
      ${ticket.featured ? "featured-ticket" : ""}
      `}
    >

      <span className="ticket-subtitle">
        {ticket.subtitle}
      </span>

      <h3 className="ticket-title">
        {ticket.title}
      </h3>

      <div className="ticket-price">

        <span>R$</span>

        <h2>{ticket.price}</h2>

      </div>

      <ul className="ticket-benefits">

        {ticket.benefits.map((benefit, index) => (

          <li key={index}>
            {benefit}
          </li>

        ))}

      </ul>

      <button className="ticket-button">
        Garantir Acesso
      </button>

    </div>

  )
}

export default TicketCard