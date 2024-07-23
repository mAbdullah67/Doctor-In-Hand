import React from "react";
import Navbar from "../components/Navbar";
import "../styles/home.css";
import "../global.css"
import { Link } from "react-router-dom";
// import Contact from "../components/Contact";
// import AboutUs from "../components/AboutUs";
// import Footer from "../components/Footer";
// import Hero from "../components/Hero";
import HomeCircles from "../components/HomeCircles";
import ChatBot from "../components/ChatBot";
const Home = () => {
  return (
    <main className="bg-red-500">
      <Navbar />
      {/* <Hero />
      <AboutUs />
      // <HomeCircles />
      <Contact />
      <Footer /> */}

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Doctor In Hand"
        />
        <section className="content">
          <h1>Doctor In Hand</h1>
          <p>
            We are here to help you with your health problems. Our doctors are
            available 24/7 to help you. Our services are one click away from
            you.
          </p>
          <Link to="/doctors" className="btn">
            View Our Doctors
          </Link>
        </section>
      </section>
      <HomeCircles />

      {/* CTA Section */}

      <section className="cta-section">
        <h2>Want to book an appointment with one of our doctors?</h2>
        <p>
          Our doctors are available 24/7 to help you with your health problems.
          Book an appointment with one of our doctors now.
        </p>
        <Link to="/doctors" className="btn">
          Book An Appointment
        </Link>
      </section>
      <ChatBot />
    </main>
  );
};

export default Home;
