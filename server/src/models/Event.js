import mongoose from "mongoose"

const ticketSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  }

})

const eventSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  banner: {
    type: String,
    required: true
  },

  gallery: [
    String
  ],

  videos: [
    String
  ],

  location: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  status: {
    type: String,

    enum: [
      "active",
      "soldout",
      "hidden"
    ],

    default: "active"
  },

  tickets: [
    ticketSchema
  ]

}, {
  timestamps: true
})

const Event = mongoose.model("Event", eventSchema)

export default Event