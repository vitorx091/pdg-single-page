import Event from "../models/Event.js"

export const getEvents = async (req, res) => {

  try {

    const events = await Event.find()

    res.status(200).json(events)

  } catch (error) {

    res.status(500).json({
      message: error.message
    })

  }

}

export const createEvent = async (req, res) => {

  try {

    console.log(req.body)

    const newEvent = await Event.create(req.body)

    res.status(201).json(newEvent)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message
    })

  }

}

export const updateEvent = async (req, res) => {

  try {

    const updatedEvent = await Event.findByIdAndUpdate(

      req.params.id,

      req.body,

      {
        new: true
      }

    )

    res.status(200).json(updatedEvent)

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message
    })

  }

}

export const deleteEvent = async (req, res) => {

  try {

    await Event.findByIdAndDelete(req.params.id)

    res.status(200).json({
      message: "Evento deletado"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      message: error.message
    })

  }

}