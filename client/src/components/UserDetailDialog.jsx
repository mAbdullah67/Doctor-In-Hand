import React from "react";

function UserDetailDialog({ onClose, isDoctor, name, email, phone }) {
  return (
    <section className="custom_dialog">
      <section className="custom_dialog-body">
        <h2>{isDoctor ? "Patient" : "Doctor"} Details</h2>

        <div className="data">
          <p>
            <strong>Name:</strong> {name}
          </p>
        </div>
        <div className="data">
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>

        <div className="data">
          <p>
            <strong>Phone:</strong>{" "}
            {
              // Check if Phone starts with 0 otherwise add 0 at the start
              phone[0] === "0" ? phone : "0" + phone
            }
          </p>
        </div>

        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            onClose();
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path>
            <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          </svg>
        </button>
      </section>
    </section>
  );
}

export default UserDetailDialog;
