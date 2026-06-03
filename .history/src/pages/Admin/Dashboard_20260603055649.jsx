import { useEffect, useState } from "react"
import axios from "axios"

import Sidebar from "../../components/admin/Sidebar"
import DashboardCard from "../../components/admin/DashboardCard"
import EventsTable from "../../components/admin/EventsTable"
import CreateEventModal from "../../components/admin/CreateEventModal"
import DeleteModal from "../../components/dmin/DeleteModal"

function Dashboard() {

    const [modalOpen, setModalOpen] = useState(false)

    const [deleteModal, setDeleteModal] = useState(false)

    const [eventToDelete, setEventToDelete] = useState(null)

    const [events, setEvents] = useState([])

    const [selectedEvent, setSelectedEvent] = useState(null)

    async function fetchEvents() {
        try {
            const response = await axios.get(
                "http://localhost:5000/api/events"
            )
            setEvents(response.data)
        } catch (error) {
            console.error("Error fetching events:", error)
        }
    }

    useEffect(() => {
        fetchEvents()
    }, [])

    async function confirmDelete() {

        try {

            await axios.delete(

                `http://localhost:5000/api/events/${eventToDelete}`

            )

            fetchEvents()

            setDeleteModal(false)

            setEventToDelete(null)

        } catch (error) {

            console.log(error)

        }

    }

    return (

        <main className="admin-layout">

            <Sidebar />

            <section className="admin-content">

                {/* TOPBAR */}
                <div className="admin-topbar">

                    <div>

                        <span>
                            PAINEL ADMIN
                        </span>

                        <h1>
                            Dashboard PDG
                        </h1>

                    </div>

                    <button
                        className="admin-create-button"
                        onClick={() => setModalOpen(true)}
                    >

                        + Criar Evento

                    </button>

                </div>

                {/* CARDS */}
                <div className="dashboard-grid">

                    <DashboardCard
                        title="Eventos Ativos"
                        value="04"
                    />

                    <DashboardCard
                        title="Ingressos Vendidos"
                        value="1.284"
                    />

                    <DashboardCard
                        title="Receita"
                        value="R$ 42.900"
                    />

                    <DashboardCard
                        title="Próximo Evento"
                        value="20 AGO"
                    />



                </div>

                <EventsTable
                    events={events}
                    setModalOpen={setModalOpen}
                    setSelectedEvent={setSelectedEvent}
                    setDeleteModal={setDeleteModal}
                    setEventToDelete={setEventToDelete}
                />

            </section>

            <CreateEventModal
                isOpen={modalOpen}
                onClose={() => {

                    setModalOpen(false)

                    setSelectedEvent(null)

                }}

                fetchEvents={fetchEvents}

                selectedEvent={selectedEvent}
            />
            <DeleteModal

                isOpen={deleteModal}

                onClose={() => {

                    setDeleteModal(false)

                    setEventToDelete(null)

                }}

                onConfirm={confirmDelete}

            />
        </main>

    )
}

export default Dashboard