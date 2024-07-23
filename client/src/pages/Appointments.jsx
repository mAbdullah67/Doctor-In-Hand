import React, { useEffect, useState } from "react";
import Empty from "../components/Empty";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fetchData from "../helper/apiCall";
import { setLoading } from "../redux/reducers/rootSlice";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/user.css";
import UserDetailDialog from "../components/UserDetailDialog";
import emailJs from "@emailjs/browser";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const { userId } = jwt_decode(localStorage.getItem("token"));
  const [showPatientDetail, setShowPatientDetail] = useState(false);
  const [selectedUserDetail, setSelectedUserDetail] = useState(null);

  const getAllAppoint = async (e) => {
    try {
      dispatch(setLoading(true));
      const temp = await fetchData(
        `/appointment/getallappointments?search=${userId}`
      );

      // Sort Temp so that latest appointement comes first. temp.createdAt
      const sortedData = temp.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      setAppointments(sortedData);

      dispatch(setLoading(false));
    } catch (error) {}
  };

  useEffect(() => {
    getAllAppoint();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const complete = async (ele) => {
    try {
      await toast.promise(
        axios.put(
          "/appointment/completed",
          {
            appointid: ele?._id,
            doctorId: ele?.doctorId?._id,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
            userId: ele?.userId?._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment Completed successfully",
          error: "Unable to Complete appointment",
          loading: "Completing appointment...",
        }
      );

      await emailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: "Doctor In Hand",
          to_name: ele?.userId?.firstname,
          to_email: ele?.userId?.email,
          email: ele?.userId?.email,
          message: `Your appointment with ${ele?.doctorId?.firstname} ${ele?.doctorId?.lastname} has been completed.`,
          reply_to: ele?.doctorId?.email,
        }
      );

      getAllAppoint();
    } catch (error) {
      return error;
    }
  };

  // Reject Appointment
  const reject = async (ele) => {
    try {
      await toast.promise(
        axios.put(
          "/appointment/rejected",
          {
            appointid: ele?._id,
            doctorId: ele?.doctorId?._id,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
            userId: ele?.userId?._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment rejected successfully",
          error: "Unable to reject appointment",
          loading: "Rejecting appointment...",
        }
      );

      await emailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: "Doctor In Hand",
          to_name: ele?.userId?.firstname,
          to_email: ele?.userId?.email,
          email: ele?.userId?.email,
          message: `Your appointment with ${ele?.doctorId?.firstname} ${ele?.doctorId?.lastname} has been rejected.`,
          reply_to: ele?.doctorId?.email,
        }
      );

      getAllAppoint();
    } catch (error) {
      return error;
    }
  };

  // Accept Appointment
  const accept = async (ele) => {
    try {
      await toast.promise(
        axios.put(
          "/appointment/accepted",
          {
            appointid: ele?._id,
            doctorId: ele?.doctorId?._id,
            doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
            userId: ele?.userId?._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        ),
        {
          success: "Appointment accepted successfully",
          error: "Unable to accept appointment",
          loading: "Accepting appointment...",
        }
      );

      await emailJs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? "",
        {
          from_name: "Doctor In Hand",
          to_name: ele?.userId?.firstname,
          to_email: ele?.userId?.email,
          email: ele?.userId?.email,
          message: `Your appointment with ${ele?.doctorId?.firstname} ${ele?.doctorId?.lastname} has been accepted.`,
          reply_to: ele?.doctorId?.email,
        }
      );

      getAllAppoint();
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <section className="container overflow-x-hidden notif-section w-full p-2">
          <h2 className="page-heading">Your Appointments</h2>

          {appointments.length > 0 ? (
            <div className="appointments overflow-x-scroll min-w-[800px] w-full mx-auto">
              <table>
                <thead>
                  <tr>
                    <th>S.No</th>
                    {userId === appointments[0].doctorId?._id ? (
                      <>
                        <th>Patient</th>
                      </>
                    ) : (
                      <th>Doctor</th>
                    )}

                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Booking Date</th>
                    <th>Booking Time</th>
                    <th>Status</th>
                    {userId === appointments[0].doctorId?._id ? (
                      <th>
                        Patient
                        <br />
                        Details
                      </th>
                    ) : (
                      <th>
                        Doctor
                        <br />
                        Details
                      </th>
                    )}
                    {userId === appointments[0].doctorId?._id ? (
                      <th>Action</th>
                    ) : (
                      <></>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {appointments?.map((ele, i) => {
                    return (
                      <tr key={ele?._id}>
                        <td>{i + 1}</td>
                        {userId === appointments[0].doctorId?._id ? (
                          <>
                            <td>
                              {ele?.userId?.firstname +
                                " " +
                                ele?.userId?.lastname}
                            </td>
                          </>
                        ) : (
                          <td>
                            {ele?.doctorId?.firstname +
                              " " +
                              ele?.doctorId?.lastname}
                          </td>
                        )}

                        <td>{ele?.date}</td>
                        <td>{ele?.time}</td>
                        <td>{ele?.createdAt.split("T")[0]}</td>
                        <td>{ele?.updatedAt.split("T")[1].split(".")[0]}</td>
                        <td>{ele?.status}</td>

                        <td>
                          <button
                            style={{
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              if (userId === ele?.doctorId?._id) {
                                setSelectedUserDetail({
                                  name:
                                    ele?.userId?.firstname +
                                    " " +
                                    ele?.userId?.lastname,
                                  email: ele?.userId?.email,
                                  phone: ele?.userId?.mobile ?? "0000000000",
                                });
                              } else {
                                setSelectedUserDetail({
                                  name:
                                    ele?.doctorId?.firstname +
                                    " " +
                                    ele?.doctorId?.lastname,
                                  email: ele?.doctorId?.email,
                                  phone: ele?.doctorId?.mobile ?? "0000000000",
                                });
                              }

                              setShowPatientDetail(true);
                            }}
                          >
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 576 512"
                              height="200px"
                              width="200px"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                width: "20px",
                                height: "20px",
                              }}
                            >
                              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                            </svg>
                          </button>
                        </td>

                        {userId === ele?.doctorId?._id ? (
                          <td>
                            {ele?.status !== "Completed" && (
                              <button
                                className={`btn user-btn accept-btn ${
                                  ele?.status === "Completed"
                                    ? "disable-btn"
                                    : ""
                                }`}
                                disabled={ele?.status === "Completed"}
                                onClick={() => complete(ele)}
                              >
                                Complete
                              </button>
                            )}
                          </td>
                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      {showPatientDetail && selectedUserDetail && (
        <UserDetailDialog
          onClose={() => {
            setShowPatientDetail(false);
            setSelectedUserDetail(null);
          }}
          email={selectedUserDetail.email}
          isDoctor={userId === appointments[0].doctorId?._id}
          name={selectedUserDetail.name}
          phone={selectedUserDetail.phone}
        />
      )}
      <Footer />
    </>
  );
};
export default Appointments;
