import React, { useState } from "react";
import "../styles/contact.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const ApplyDoctor = () => {
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    specialization: "",
    experience: "",
    fees: "",
    location: "",
    availabilityStartHour: "",
    availabilityEndHour: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const btnClick = async (e) => {
    e.preventDefault();
    try {
      await toast.promise(
        axios.post(
          "/doctor/applyfordoctor",
          {
            formDetails,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Doctor application sent successfully",
          error: "Unable to send Doctor application",
          loading: "Sending doctor application...",
        }
      );

      navigate("/");
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      <section
        className="register-section flex-center apply-doctor"
        id="contact"
      >
        <div className="register-container flex-center contact">
          <h2 className="form-heading">Apply for Doctor</h2>
          <form className="register-form ">
            <input
              type="text"
              name="specialization"
              className="form-input"
              placeholder="Enter your specialization"
              value={formDetails.specialization}
              onChange={inputChange}
            />
            <input
              type="number"
              name="experience"
              className="form-input"
              placeholder="Enter your experience (in years)"
              value={formDetails.experience}
              onChange={inputChange}
            />
            <input
              type="number"
              name="fees"
              className="form-input"
              placeholder="Enter your fees  (in PKR)"
              value={formDetails.fees}
              onChange={inputChange}
            />
            <input
              type="text"
              name="location"
              className="form-input"
              placeholder="Enter your location"
              value={formDetails.location}
              onChange={inputChange}
            />

            {/* Availability Start Hour: */}
            <select
              name="availabilityStartHour"
              className="form-input"
              value={formDetails.availabilityStartHour}
              onChange={inputChange}
            >
              <option value="" selected disabled>
                Select your availability start hour
              </option>
              <option value="1">1 AM</option>
              <option value="2">2 AM</option>
              <option value="3">3 AM</option>
              <option value="4">4 AM</option>
              <option value="5">5 AM</option>
              <option value="6">6 AM</option>
              <option value="7">7 AM</option>
              <option value="8">8 AM</option>
              <option value="9">9 AM</option>
              <option value="10">10 AM</option>
              <option value="11">11 AM</option>
              <option value="12">12 PM</option>
              <option value="13">1 PM</option>
              <option value="14">2 PM</option>
              <option value="15">3 PM</option>
              <option value="16">4 PM</option>
              <option value="17">5 PM</option>
              <option value="18">6 PM</option>
              <option value="19">7 PM</option>
              <option value="20">8 PM</option>
              <option value="21">9 PM</option>
              <option value="22">10 PM</option>
              <option value="23">11 PM</option>
              <option value="24">12 AM</option>
            </select>

            {/* Availability End Hour: */}
            <select
              name="availabilityEndHour"
              className="form-input"
              value={formDetails.availabilityEndHour}
              onChange={inputChange}
            >
              <option value="" selected disabled>
                Select your availability end hour
              </option>
              <option value="1">1 AM</option>
              <option value="2">2 AM</option>
              <option value="3">3 AM</option>
              <option value="4">4 AM</option>
              <option value="5">5 AM</option>
              <option value="6">6 AM</option>
              <option value="7">7 AM</option>
              <option value="8">8 AM</option>
              <option value="9">9 AM</option>
              <option value="10">10 AM</option>
              <option value="11">11 AM</option>
              <option value="12">12 PM</option>
              <option value="13">1 PM</option>
              <option value="14">2 PM</option>
              <option value="15">3 PM</option>
              <option value="16">4 PM</option>
              <option value="17">5 PM</option>
              <option value="18">6 PM</option>
              <option value="19">7 PM</option>
              <option value="20">8 PM</option>
              <option value="21">9 PM</option>
              <option value="22">10 PM</option>
              <option value="23">11 PM</option>
              <option value="24">12 AM</option>
            </select>

            <button type="submit" className="btn form-btn" onClick={btnClick}>
              apply
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ApplyDoctor;
