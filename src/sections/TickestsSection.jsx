import { tickets } from "../data/tickets"

import TicketCard from "../components/ui/TicketsCard"

function TicketsSection() {

  return (

    <section className="tickets-section">

      <div className="tickets-header">

        <span>
          EXPERIÊNCIAS
        </span>

        <h2>
          Escolha seu setor
        </h2>

      </div>

      <div className="tickets-container">

        {tickets.map((ticket) => (

          <TicketCard
            key={ticket.id}
            ticket={ticket}
          />

        ))}

      </div>

    </section>

  )
}

export default TicketsSection