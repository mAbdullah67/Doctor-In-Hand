import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/register.css";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function Register() {
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    confpassword: "",
  });
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpload = async (element) => {
    setLoading(true);
    if (element.type === "image/jpeg" || element.type === "image/png") {
      const data = new FormData();
      data.append("file", element);
      data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      fetch(process.env.REACT_APP_CLOUDINARY_BASE_URL, {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => setFile(data.url.toString()));
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Please select an image in jpeg or png format");
    }
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      if (loading) return;

      const { firstname, lastname, email, password, confpassword, mobile } =
        formDetails;

      if (
        firstname &&
        lastname &&
        email &&
        password &&
        confpassword &&
        mobile &&
        firstname.length > 3 &&
        lastname.length > 3 &&
        password.length > 5 &&
        password === confpassword &&
        mobile.length === 11 &&
        file
      ) {
        await toast.promise(
          axios.post("http://localhost:5000/api/user/register", {
            firstname,
            lastname,
            email,
            password,
            pic: file,
            mobile,
          }),
          {
            pending: "Registering user...",
            success: "User registered successfully",
            error: "Unable to register user",
            loading: "Registering user...",
          }
        );
        return navigate("/login");
      } else {
        if (!file) {
          toast.error("Please upload a profile picture");
        }
        if (firstname.length <= 3) {
          toast.error("First name must be at least 3 characters long");
        }
        if (lastname.length <= 3) {
          toast.error("Last name must be at least 3 characters long");
        }
        if (password.length <= 5) {
          toast.error("Password must be at least 5 characters long");
        }
        if (password !== confpassword) {
          toast.error("Passwords do not match");
        }
        if (mobile.length !== 11) {
          toast.error("Mobile number must be 11 characters long");
        }
      }
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="register-section flex-center">
      <div className="register-container flex-center">
        <h2
          className="form-heading"
          style={{
            color: "white",
          }}
        >
          Sign Up
        </h2>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={formDetails.firstname}
            onChange={inputChange}
          />
          <input
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={formDetails.lastname}
            onChange={inputChange}
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={formDetails.email}
            onChange={inputChange}
          />
          <input
            type="number"
            name="mobile"
            className="form-input"
            placeholder="Enter your mobile number"
            value={formDetails.mobile}
            onChange={inputChange}
          />
          <input
            type="file"
            onChange={(e) => onUpload(e.target.files[0])}
            name="profile-pic"
            id="profile-pic"
            className="form-input"
          />
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={formDetails.password}
            onChange={inputChange}
          />
          <input
            type="password"
            name="confpassword"
            className="form-input"
            placeholder="Confirm your password"
            value={formDetails.confpassword}
            onChange={inputChange}
          />
          <button
            type="submit"
            className="btn form-btn"
            disabled={loading ? true : false}
          >
            sign up
          </button>
        </form>
        <p
        style={{
          color: "white",
        }}
        >
          Already a user?{" "}
          <NavLink className="login-link" to={"/login"}
          style={{
            color: "white",
          }}
          >
            Log in
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default Register;
