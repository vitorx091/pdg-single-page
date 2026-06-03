import React from "react";

function EventsTable({
    events,
    setModalOpen,
    setSelectedEvent,
    setDeleteModal,
    setEventToDelete
}) {
    return (
        <div className="events-table-wrapper">
            <div className="events-table-header">
                <h2>Eventos Recentes</h2>
            </div>

            <table className="events-table">
                <thead>
                    <tr>
                        <th>Evento</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Ingressos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map((event) => (
                        <tr key={event._id}>
                            <td>{event.title}</td>
                            <td>{new Date(event.date).toLocaleDateString("pt-BR")}</td>
                            <td>
                                <span className={`status ${event.status}`}>{event.status}</span>
                            </td>
                            <td>{event.tickets?.[0]?.quantity || 0}</td>
                            <td className="buttons-actions">
                                <button

                                    onClick={() => {

                                        setSelectedEvent(event)

                                        setModalOpen(true)

                                    }}

                                >

                                    Editar

                                </button>
                                <button

                                    onClick={() => {

                                        setDeleteModal(true)

                                        setEventToDelete(event._id)

                                    }}

                                >

                                    Deletar

                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EventsTable;