import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);
  const [search, setSearch] = useState("");

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/doctor/getalldoctors`);
    setDoctors(data);
    console.log(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Our Doctors</h2>
          <section className="doctors-search">
            <input
              type="search"
              name="search"
              className="form-input"
              placeholder="Search Doctors..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </section>
          {doctors.length === 0 ||
          doctors.filter(
            (ele) =>
              ele?.specialization
                ?.toLowerCase()
                ?.includes(search.toLowerCase()) ||
              (ele?.userId?.firstname + " " + ele?.userId?.lastname)
                ?.toLowerCase()
                ?.includes(search.toLowerCase())
          ).length === 0 ? (
            <Empty />
          ) : (
            <div className="doctors-card-container">
              {doctors
                .filter(
                  (ele) =>
                    ele?.specialization
                      ?.toLowerCase()
                      ?.includes(search.toLowerCase()) ||
                    (ele?.userId?.firstname + " " + ele?.userId?.lastname)
                      ?.toLowerCase()
                      ?.includes(search.toLowerCase())
                )
                .map((ele) => {
                  return <DoctorCard ele={ele} key={ele._id} />;
                })}
            </div>
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;
