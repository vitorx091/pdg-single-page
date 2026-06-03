import { useEffect, useState } from "react"

import axios from "axios"

function CreateEventModal({ isOpen, onClose, fetchEvents, selectedEvent }) {

    const emptyForm = {

        title: "",
        description: "",
        banner: "",
        location: "",
        date: ""

    }

    const [formData, setFormData] = useState(emptyForm)

    useEffect(() => {

        if (selectedEvent) {

            setFormData({

                title: selectedEvent.title || "",

                description:
                    selectedEvent.description || "",

                banner:
                    selectedEvent.banner || "",

                location:
                    selectedEvent.location || "",

                date: selectedEvent.date
                    ? selectedEvent.date.split("T")[0]
                    : ""

            })

        } else {

            setFormData(emptyForm)

        }

    }, [selectedEvent])

    useEffect(() => {

        if (selectedEvent) {

            setFormData(selectedEvent)

        }

    }, [selectedEvent])

    const formattedData = {

        ...formData,

        date: new Date(
            formData.date + "T12:00:00"
        )

    }


    async function handleSubmit(e) {

        e.preventDefault()

        try {

            if (selectedEvent) {

                await axios.put(

                    `http://localhost:5000/api/events/${selectedEvent._id}`,

                    formattedData

                )

            } else {

                await axios.post(

                    "http://localhost:5000/api/events",

                    formattedData

                )

            }

            await fetchEvents()

            setFormData(emptyForm)

            onClose()

        } catch (error) {

            console.log(error)

        }

    }

    function handleChange(e) {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value

        })

    }

    if (!isOpen) return null

    return (

        <div className="modal-overlay">

            <div className="create-event-modal">

                <div className="modal-header">

                    <h2>

                        {selectedEvent
                            ? "Editar Evento"
                            : "Criar Evento"
                        }

                    </h2>

                    <button onClick={onClose}>
                        ✕
                    </button>

                </div>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="title"
                        placeholder="Nome do Evento"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Descrição"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="banner"
                        placeholder="URL Banner"
                        value={formData.banner}
                        onChange={handleChange}
                    />
                    {formData.banner && (

                        <img

                            src={formData.banner}

                            alt="Preview"

                            className="banner-preview"

                            onError={(e) => {

                                e.target.style.display = "none"

                            }}

                        />

                    )}

                    <input
                        type="text"
                        name="location"
                        placeholder="Localização"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />

                    <button
                        type="submit"
                        className="submit-event-button"
                    >

                        Salvar Evento

                    </button>

                </form>

            </div>

        </div>

    )
}

export default CreateEventModal