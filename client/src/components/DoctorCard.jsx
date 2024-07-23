import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };

  function formatTimeRange(startHour, endHour) {
    const displayStartHour = startHour % 12; // Convert to 12-hour format
    const displayEndHour = endHour % 12; // Convert to 12-hour format

    const displayStartAMPM =
      startHour === 24 ? "AM" : startHour < 12 ? "AM" : "PM";
    const displayEndAMPM = endHour === 24 ? "AM" : endHour < 12 ? "AM" : "PM";

    const displayStartHour12 = displayStartHour === 0 ? 12 : displayStartHour;

    const displayEndHour12 = displayEndHour === 0 ? 12 : displayEndHour;

    return `${displayStartHour12}:00 ${displayStartAMPM} - ${displayEndHour12}:00 ${displayEndAMPM}`;
  }

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={
            ele?.userId?.pic ||
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        Dr. {ele?.userId?.firstname + " " + ele?.userId?.lastname}
      </h3>
      <p className="specialization">
        <strong>Specialization: </strong>
        {ele?.specialization}
      </p>
      <p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}{" "}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>PKR {ele?.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>0
        {ele?.userId?.mobile}
      </p>
      <p
        className="location"
        style={{
          maxWidth: "300px",
        }}
      >
        <strong>Location: </strong>
        {ele?.location}
      </p>
      <p
        className="location"
        style={{
          maxWidth: "300px",
        }}
      >
        <strong>Availability: </strong>
        {formatTimeRange(ele?.availabilityStartHour, ele?.availabilityEndHour)}
      </p>
      <button className="btn appointment-btn" onClick={handleModal}>
        Book Appointment
      </button>
      {modalOpen && <BookAppointment setModalOpen={setModalOpen} ele={ele} />}
    </div>
  );
};

export default DoctorCard;
