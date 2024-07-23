const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    specialization: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
    isDoctor: {
      type: Boolean,
      default: false,
    },
    location: {
      type: String,
      required: true,
    },
    availabilityStartHour: {
      type: Number,
      required: true,
    },
    availabilityEndHour: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", schema);

module.exports = Doctor;
