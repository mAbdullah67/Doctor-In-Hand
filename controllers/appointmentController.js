const Appointment = require("../models/appointmentModel");
const Notification = require("../models/notificationModel");
const User = require("../models/userModel");

const getallappointments = async (req, res) => {
  try {
    const keyword = req.query.search
      ? {
          $or: [{ userId: req.query.search }, { doctorId: req.query.search }],
        }
      : {};

    const appointments = await Appointment.find(keyword)
      .populate("doctorId")
      .populate("userId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get apponintments");
  }
};

const bookappointment = async (req, res) => {
  try {
    // Check if the date is in the past
    const today = new Date();
    const appointmentDate = new Date(req.body.date);
    if (appointmentDate < today) {
      return res.status(400).send("You cannot book an appointment in the past");
    }

    // Check if Slot is available
    const alreadyFound = await Appointment.findOne({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
    });

    if (alreadyFound) {
      return res.status(400).send("Slot is already booked");
    }

    const user = await User.findById(req.locals);
    const appointment = await Appointment({
      date: req.body.date,
      time: req.body.time,
      doctorId: req.body.doctorId,
      userId: req.locals,
    });

    const usernotification = Notification({
      userId: user._id,
      content: `You booked an appointment with Dr. ${req.body.doctorname} for ${req.body.date} ${req.body.time}`,
    });

    await usernotification.save();

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You have an appointment with ${user.firstname} ${user.lastname} on ${req.body.date} at ${req.body.time}`,
    });

    await doctornotification.save();

    const result = await appointment.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Unable to book appointment");
  }
};

const completed = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Completed" }
    );
    const user = await User.findById(req.locals);

    const usernotification = Notification({
      userId: req.body.userId,
      content: `Your appointment with ${req.body.doctorname} has been completed`,
    });

    await usernotification.save();

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You completed appointment with ${user.firstname} ${user.lastname}`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment completed");
  } catch (error) {
    res.status(500).send("Unable to complete appointment");
  }
};

// Rejected Appointment
const rejected = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Rejected" }
    );
    const user = await User.findById(req.locals);

    const usernotification = Notification({
      userId: req.body.userId,
      content: `Your appointment with ${req.body.doctorname} has been rejected`,
    });

    await usernotification.save();

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You rejected appointment with ${user.firstname} ${user.lastname}`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment rejected");
  } catch (error) {
    res.status(500).send("Unable to reject appointment");
  }
};

// Accepted Appointment
const Accepted = async (req, res) => {
  try {
    const alreadyFound = await Appointment.findOneAndUpdate(
      { _id: req.body.appointid },
      { status: "Accepted" }
    );
    const user = await User.findById(req.locals);

    const usernotification = Notification({
      userId: req.body.userId,
      content: `Your appointment with ${req.body.doctorname} has been Accepted`,
    });

    await usernotification.save();

    const doctornotification = Notification({
      userId: req.body.doctorId,
      content: `You accepted appointment with ${user.firstname} ${user.lastname}`,
    });

    await doctornotification.save();

    return res.status(201).send("Appointment Accepted");
  } catch (error) {
    res.status(500).send("Unable to accept appointment");
  }
};

module.exports = {
  getallappointments,
  bookappointment,
  completed,
  rejected,
  Accepted,
};
