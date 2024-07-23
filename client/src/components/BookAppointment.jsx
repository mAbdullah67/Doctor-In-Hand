// import React, { useEffect, useState } from "react";
// import "../styles/bookappointment.css";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { IoMdClose } from "react-icons/io";
// import emailJs from "@emailjs/browser";
// import { useSelector } from "react-redux";

// const BookAppointment = ({ setModalOpen, ele }) => {
//   const { userInfo } = useSelector((state) => state.root);
//   const [formDetails, setFormDetails] = useState({
//     date: "",
//     time: "",
//   });

//   function createAvailabilityOptions(startTime, endTime, interval = 30) {
//     var options = [];

//     // Create a loop to generate time slots from start time to end time
//     if (startTime < endTime) {
//       for (let hour = startTime; hour < endTime; hour++) {
//         const displayHour = hour % 12; // Convert to 12-hour format
//         // const displayAMPM = hour < 12 ? "AM" : "PM";
//         const displayAMPM = hour === 24 ? "AM" : hour < 12 ? "AM" : "PM";
//         const displayHour12 = displayHour === 0 ? 12 : displayHour;

//         // Check if the current hour is the end hour
//         if (hour === endTime) {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}1-${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>
//           );
//         } else {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}11-${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-151-${Math.random()}`}
//               value={`${displayHour12}:15 ${displayAMPM}`}
//             >
//               {`${displayHour12}:15 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-301-${Math.random()}`}
//               value={`${displayHour12}:30 ${displayAMPM}`}
//             >
//               {`${displayHour12}:30 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-451-${Math.random()}`}
//               value={`${displayHour12}:45 ${displayAMPM}`}
//             >
//               {`${displayHour12}:45 ${displayAMPM}`}
//             </option>
//           );
//         }
//       }
//     } else {
//       for (let hour = startTime; hour <= 24; hour++) {
//         const displayHour = hour % 12; // Convert to 12-hour format
//         const displayAMPM = hour === 24 ? "AM" : hour < 12 ? "AM" : "PM";
//         const displayHour12 = displayHour === 0 ? 12 : displayHour;
//         // Check if the current hour is the end hour
//         if (hour === endTime) {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}2-${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>
//           );
//         } else {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}22-${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-152-${Math.random()}`}
//               value={`${displayHour12}:15 ${displayAMPM}`}
//             >
//               {`${displayHour12}:15 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-302-${Math.random()}`}
//               value={`${displayHour12}:30 ${displayAMPM}`}
//             >
//               {`${displayHour12}:30 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}-452-${Math.random()}`}
//               value={`${displayHour12}:45 ${displayAMPM}`}
//             >
//               {`${displayHour12}:45 ${displayAMPM}`}
//             </option>
//           );
//         }
//       }

//       for (let hour = 1; hour < endTime; hour++) {
//         const displayHour = hour % 12; // Convert to 12-hour format
//         const displayAMPM = hour === 24 ? "AM" : hour < 12 ? "AM" : "PM";
//         const displayHour12 = displayHour === 0 ? 12 : displayHour;
//         // Check if the current hour is the end hour
//         if (hour === endTime) {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}-3${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>
//           );
//         } else {
//           options.push(
//             <option
//               key={`${displayHour}-${displayAMPM}-33${Math.random()}`}
//               value={`${displayHour12}:00 ${displayAMPM}`}
//             >
//               {`${displayHour12}:00 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}153-${Math.random()}`}
//               value={`${displayHour12}:15 ${displayAMPM}`}
//             >
//               {`${displayHour12}:15 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}303-${Math.random()}`}
//               value={`${displayHour12}:30 ${displayAMPM}`}
//             >
//               {`${displayHour12}:30 ${displayAMPM}`}
//             </option>,
//             <option
//               key={`${displayHour}-${displayAMPM}453-${Math.random()}`}
//               value={`${displayHour12}:45 ${displayAMPM}`}
//             >
//               {`${displayHour12}:45 ${displayAMPM}`}
//             </option>
//           );
//         }
//       }
//     }

//     return options;
//   }

//   const inputChange = (e) => {
//     const { name, value } = e.target;
//     return setFormDetails({
//       ...formDetails,
//       [name]: value,
//     });
//   };

//   const bookAppointment = async (e) => {
//     e.preventDefault();

//     // Check if date and time is empty or is in the past
//     if (formDetails.date === "" || formDetails.time === "") {
//       return toast.error("Please select date and time");
//     }

//     // Selected Datetime is in the past
//     const selectedDate = new Date(`${formDetails.date} ${formDetails.time}`);
//     if (selectedDate < new Date()) {
//       return toast.error("Please select a future date and time");
//     }

//     try {
//       await toast.promise(
//         axios.post(
//           "/appointment/bookappointment",
//           {
//             doctorId: ele?.userId?._id,
//             date: formDetails.date,
//             time: formDetails.time,
//             doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
//           },
//           {
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`,
//             },
//           }
//         ),
//         {
//           success: "Appointment booked successfully",
//           loading: "Booking appointment...",
//           error: (err) =>
//             err?.response?.data
//               ? err?.response?.data
//               : "Unable to book appointment",
//         }
//       );

//       emailJs.init({
//         publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
//         blockHeadless: true,
//       });

//       await emailJs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
//         {
//           from_name: "Doctor In Hand",
//           to_name: ele.userId.firstname,
//           to_email: ele.userId.email,
//           email: ele.userId.email,
//           message: `You have an appointment with ${userInfo.firstname} ${userInfo.lastname} on ${formDetails.date} at ${formDetails.time}`,
//           reply_to: userInfo.email,
//         }
//       );

//       await emailJs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
//         {
//           from_name: "Doctor In Hand",
//           to_name: userInfo.firstname,
//           to_email: userInfo.email,
//           email: userInfo.email,
//           message: `You booked an appointment with Dr. ${ele.userId.firstname} for ${formDetails.date} at ${formDetails.time}`,
//           reply_to: ele.userId.email,
//         }
//       );

//       setModalOpen(false);
//     } catch (error) {
//       return error;
//     }
//   };

//   return (
//     <>
//       <div className="modal flex-center">
//         <div className="modal__content">
//           <h2 className="page-heading">Book Appointment</h2>
//           <IoMdClose
//             onClick={() => {
//               setModalOpen(false);
//             }}
//             className="close-btn"
//           />
//           <div className="register-container flex-center book">
//             <form className="register-form">
//               <input
//                 type="date"
//                 name="date"
//                 className="form-input"
//                 value={formDetails.date}
//                 onChange={inputChange}
//               />

//               <select
//                 name="time"
//                 className="form-input"
//                 value={formDetails.time}
//                 onChange={inputChange}
//               >
//                 {createAvailabilityOptions(
//                   ele.availabilityStartHour,
//                   ele.availabilityEndHour,
//                   30
//                 )}
//               </select>

//               <button
//                 type="submit"
//                 className="btn form-btn"
//                 onClick={bookAppointment}
//               >
//                 book
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookAppointment;
import React, { useEffect, useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import emailJs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// Load Stripe outside of a component’s render to avoid recreating the Stripe object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const BookAppointment = ({ setModalOpen, ele }) => {
  const { userInfo } = useSelector((state) => state.root);
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  function createAvailabilityOptions(startTime, endTime, interval = 30) {
    var options = [];

    // Create a loop to generate time slots from start time to end time
    if (startTime < endTime) {
      for (let hour = startTime; hour < endTime; hour++) {
        const displayHour = hour % 12; // Convert to 12-hour format
        const displayAMPM = hour === 24 ? "AM" : hour < 12 ? "AM" : "PM";
        const displayHour12 = displayHour === 0 ? 12 : displayHour;

        options.push(
          <option
            key={`${displayHour}-${displayAMPM}11-${Math.random()}`}
            value={`${displayHour12}:00 ${displayAMPM}`}
          >
            {`${displayHour12}:00 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-151-${Math.random()}`}
            value={`${displayHour12}:15 ${displayAMPM}`}
          >
            {`${displayHour12}:15 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-301-${Math.random()}`}
            value={`${displayHour12}:30 ${displayAMPM}`}
          >
            {`${displayHour12}:30 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-451-${Math.random()}`}
            value={`${displayHour12}:45 ${displayAMPM}`}
          >
            {`${displayHour12}:45 ${displayAMPM}`}
          </option>
        );
      }
    } else {
      for (let hour = startTime; hour <= 24; hour++) {
        const displayHour = hour % 12; // Convert to 12-hour format
        const displayAMPM = hour === 24 ? "AM" : hour < 12 ? "AM" : "PM";
        const displayHour12 = displayHour === 0 ? 12 : displayHour;

        options.push(
          <option
            key={`${displayHour}-${displayAMPM}22-${Math.random()}`}
            value={`${displayHour12}:00 ${displayAMPM}`}
          >
            {`${displayHour12}:00 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-152-${Math.random()}`}
            value={`${displayHour12}:15 ${displayAMPM}`}
          >
            {`${displayHour12}:15 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-302-${Math.random()}`}
            value={`${displayHour12}:30 ${displayAMPM}`}
          >
            {`${displayHour12}:30 ${displayAMPM}`}
          </option>,
          <option
            key={`${displayHour}-${displayAMPM}-452-${Math.random()}`}
            value={`${displayHour12}:45 ${displayAMPM}`}
          >
            {`${displayHour12}:45 ${displayAMPM}`}
          </option>
        );
      }
    }

    return options;
  }

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formDetails.date === "" || formDetails.time === "") {
      return toast.error("Please select date and time");
    }

    const selectedDate = new Date(`${formDetails.date} ${formDetails.time}`);
    if (selectedDate < new Date()) {
      return toast.error("Please select a future date and time");
    }

    setPaymentProcessing(true);
    
    // Create a payment intent on the server
    try {

      const clientSecret = await axios.post("/payment/create-payment-intent", {
        amount: ele.fees, // example amount in cents (50 USD)
      });
      
      console.log("2");
      if (!stripe || !elements) {
        setPaymentProcessing(false);
        return toast.error("Stripe has not loaded yet.");
      }

      const cardElement = elements.getElement(CardNumberElement);
      console.log("card ", cardElement);
      console.log("client ", clientSecret.data.clientSecret);
      console.log(
        "REACT_APP_STRIPE_PUBLIC_KEY ",
        process.env.REACT_APP_STRIPE_PUBLIC_KEY
      );
      console.log("stripe:", stripe);
      console.log("elements:", elements);

      const result = await stripe.confirmCardPayment(
        clientSecret.data.clientSecret,
        {
          payment_method: {
            card: cardElement,
          },
        }
      );
      console.log("result : ", result);
      if (result.error) {
        setPaymentProcessing(false);
        return toast.error(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        await bookAppointment();
      }
    } catch (error) {
      setPaymentProcessing(false);
      return toast.error("Payment failed, please try again.");
    }
  };

  const bookAppointment = async () => {
    try {
      await toast.promise(
        axios.post(
          "/appointment/bookappointment",
          {
            doctorId: ele?.userId?._id,
            date: formDetails.date,
            time: formDetails.time,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment booked successfully",
          loading: "Booking appointment...",
          error: (err) =>
            err?.response?.data
              ? err?.response?.data
              : "Unable to book appointment",
        }
      );

      emailJs.init({
        publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        blockHeadless: true,
      });

      await emailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: "Doctor In Hand",
          to_name: ele.userId.firstname,
          to_email: ele.userId.email,
          email: ele.userId.email,
          message: `You have an appointment with ${userInfo.firstname} ${userInfo.lastname} on ${formDetails.date} at ${formDetails.time}`,
          reply_to: userInfo.email,
        }
      );

      await emailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: "Doctor In Hand",
          to_name: userInfo.firstname,
          to_email: userInfo.email,
          email: userInfo.email,
          message: `You booked an appointment with Dr. ${ele.userId.firstname} for ${formDetails.date} at ${formDetails.time}`,
          reply_to: ele.userId.email,
        }
      );

      setModalOpen(false);
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="modal flex-center">
      <div className="modal__content">
        <h2 className="page-heading">Book Appointment</h2>
        <IoMdClose
          onClick={() => {
            setModalOpen(false);
          }}
          className="close-btn"
        />
        <div className="register-container flex-center book">
          <form className="register-form" onSubmit={handleSubmit}>
            <input
              type="date"
              name="date"
              className="form-input text-black"
              value={formDetails.date}
              onChange={inputChange}
            />
            <select
              name="time"
              className="form-input text-black"
              value={formDetails.time}
              onChange={inputChange}
            >
              {createAvailabilityOptions(
                ele.availabilityStartHour,
                ele.availabilityEndHour,
                30
              )}
            </select>
            <CardNumberElement className="form-input" />
            <CardExpiryElement className="form-input" />
            <CardCvcElement className="form-input" />
          
            <button
              type="submit"
              className="btn form-btn"
              disabled={paymentProcessing}
            >
              {paymentProcessing ? "Processing..." : "Book & Pay"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const BookAppointmentWrapper = (props) => (
  <Elements stripe={stripePromise}>
    <BookAppointment {...props} />
  </Elements>
);

export default BookAppointmentWrapper;
