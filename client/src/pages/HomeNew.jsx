import React from "react";
import "../styles/homenew.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../global.css"
import "../components/ChatBot"
import ChatBot from "../components/ChatBot";
function HomeNew() {
  return (
    <main
    className="max-lg:px-2"
      style={{
        paddingBottom: "100px",
      }}
    >
      <ChatBot/>
      <Navbar />
      <div className="main-container w-full max-w-screen-2xl px-5 py-10">
        <div className="flex flex-col gap-5 h-full justify-center w-full  my-auto max-md:pb-6">
          <h2 className="text-[#1E375A] text-6xl">Your Health - <br/> <span className="text-[#2F87EE]">Is Our Mission</span></h2>
          
          <div className="max-lg:text-xl max-w-2xl">
            We are here to take care of your health and provide quality medical
            care. Trust the professionals for your well being
          </div>
          <div className="flex justify-start w-full">

          <Link to={"/doctors"} className="max-lg:ml-0 bg-[#2F87EE] rounded-lg py-2 px-4 sm:px-6 border border-[#2F87EE] hover:text-[#2F87EE] hover:shadow-2xl  hover:bg-white transition-all duration-300 text-white font-bold max-sm:w-[50%] text-center">
            Take an Appointment
          </Link>
          </div>
        </div>
        <div className="image">
          <img src="Slice 4.png" alt="slice" className="image-right" />
        </div>
      </div>

      {/* 2 */}

      <div className=" max-lg:mx-auto container-con max-w-screen-2xl mx-auto">
        <div className="max-lg:mx-auto text-data">
          <img src="1.png" alt="1" />
          <h4>Online Appointment</h4>
          <p className="para">
            Stay safe at home while receiving top-quality medical care. Online
            video visits and phone appointments with certified physicians.
          </p>
        </div>
        <div className="max-lg:mx-auto text-data">
          <img src="2.png" alt="2" />
          <h4>Qualified Doctors</h4>
          <p className="para">
            A qualified possesses a comprehensive understanding of medical
            sciences.
          </p>
        </div>
        <div className="max-lg:mx-auto text-data">
          <img src="3.png" alt="3" />
          <h4>24/7</h4>
          <p className="para">
            Access healthcare services anytime, day or night, from the comfort
            of your home or any location with an internet connection.
          </p>
        </div>
      </div>

      {/* 3 */}

      <div className="main-contain1 max-w-screen-2xl mx-auto">
        
          <h3 className="wid">
            Doctor In Hand the way you want it. Simple, Convetient, and
            Reliable.
          </h3>
        
        <div className="max-lg:flex-col main-contain1-a">
          <div>
            {" "}
            <h2>1000+</h2>
            <p>Patients Capacity</p>
          </div>
          <div>
            {" "}
            <h2>100+</h2>
            <p>Expert Doctors</p>
          </div>
          <div>
            {" "}
            <h2>05+</h2>
            <p>Years </p>
          </div>
        </div>
      </div>

      {/* 4 */}

      <div className="w-full grid md:grid-cols-2 gap-5 max-w-screen-2xl mx-auto py-20">
        <div className="w-full flex justify-center items-center max-h-[600px] rounded-lg overflow-hidden md:p-5">
          <img className="border-none w-full h-[350px] sm:h-[450px] md:h-full object-cover rounded-lg max-sm:min-h-80  " src="about1.png" alt="" />
        </div>
        <div className="about-text w-full ">
          <button>More About Us</button>
          <h2>
            The Best Medical <br /> that Your Can Trust
          </h2>
          <div className="text-xl">
            is excellence in healthcare, offering superior medical services
            backed by reliability and trustworthiness.
          </div>
          <div className="text-xl">
            With highly skilled professionals and cutting-edge facilities, it
            ensures personalized care, transparent communication, and long-term
            patient relationships.{" "}
          </div>

          <div className="about-list">
            <ul>
              <li>
                <h3 className="about-list-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                      fill="#2F87EE"
                    />
                  </svg>
                  Easily Accessible
                </h3>
              </li>
              <li>
                <h3 className="about-list-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                      fill="#2F87EE"
                    />
                  </svg>{" "}
                  Easy Online appointment
                </h3>
              </li>
            </ul>
            <ul>
              <li>
                <h3 className="about-list-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                      fill="#2F87EE"
                    />
                  </svg>{" "}
                  Comfortable Medical
                </h3>
              </li>
              <li>
                <h3 className="about-list-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 0.25C7.26942 0.25 5.57769 0.763179 4.13876 1.72464C2.69983 2.6861 1.57832 4.05267 0.916058 5.65152C0.253791 7.25037 0.080512 9.00971 0.418133 10.707C0.755753 12.4044 1.58911 13.9635 2.81282 15.1872C4.03653 16.4109 5.59563 17.2442 7.29296 17.5819C8.9903 17.9195 10.7496 17.7462 12.3485 17.0839C13.9473 16.4217 15.3139 15.3002 16.2754 13.8612C17.2368 12.4223 17.75 10.7306 17.75 9C17.75 6.67936 16.8281 4.45376 15.1872 2.81282C13.5462 1.17187 11.3206 0.25 9 0.25ZM7.75 12.4937L4.625 9.36875L5.61875 8.375L7.75 10.5063L12.3813 5.875L13.3788 6.86625L7.75 12.4937Z"
                      fill="#2F87EE"
                    />
                  </svg>{" "}
                  Safe & Secure
                </h3>
              </li>
            </ul>
          </div>

          
            <Link to={"/doctors"} className="py-2 px-4 border border-[#2F87EE] text-[#2F87EE] w-fit rounded-md hover:bg-[#2F87EE] hover:text-white transition-all duration-300">Make an appointment</Link>
          
        </div>
      </div>

      {/* 5 */}

      <div className="w-full grid md:grid-cols-2 gap-5 max-w-screen-2xl mx-auto ">
        <div className="about-text2 w-full flex flex-col gap-5">
          <h2 className="">Need A Consultation?</h2>
          <div className="text-xl">
            If you need a consultation, our team of experienced professionals is
            here to help. We offer personalized consultations tailored to your
            specific needs, ensuring you receive the expert guidance and support
            you deserve. .
          </div>
          <div className="text-xl">
            Contact us today to schedule your consultation and take the first
            step towards finding the solutions you need.
          </div>
          <div className="about-list2">
            <div className="about-list2-buttons">
              <a
                href="https://wa.link/siewjn"
                target="_blank"
                rel="noreferrer"
                className="about-list2-button"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.2992 2.2498V9.0498C14.2992 9.50067 14.1201 9.93307 13.8013 10.2519C13.4825 10.5707 13.0501 10.7498 12.5992 10.7498H8.34922L4.09922 14.1498V10.7498H2.39922C1.94835 10.7498 1.51595 10.5707 1.19714 10.2519C0.878325 9.93307 0.699219 9.50067 0.699219 9.0498V2.2498C0.699219 1.79894 0.878325 1.36653 1.19714 1.04772C1.51595 0.728911 1.94835 0.549805 2.39922 0.549805H12.5992C13.0501 0.549805 13.4825 0.728911 13.8013 1.04772C14.1201 1.36653 14.2992 1.79894 14.2992 2.2498ZM4.94922 4.7998H3.24922V6.4998H4.94922V4.7998ZM6.64922 4.7998H8.34922V6.4998H6.64922V4.7998ZM11.7492 4.7998H10.0492V6.4998H11.7492V4.7998Z"
                    fill="#2F87EE"
                  />
                </svg>
                Chat
              </a>
              <Link to={"/doctors"} className="about-list2-button">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7507 12.75C11.1264 12.75 11.4867 12.6183 11.7524 12.3839C12.0181 12.1495 12.1673 11.8315 12.1673 11.5V1.5C12.1673 1.16848 12.0181 0.850537 11.7524 0.616116C11.4867 0.381696 11.1264 0.25 10.7507 0.25H6.50065V4.625L4.72982 3.6875L2.95898 4.625V0.25H2.25065C1.87493 0.25 1.51459 0.381696 1.24892 0.616116C0.98324 0.850537 0.833984 1.16848 0.833984 1.5V11.5C0.833984 11.8315 0.98324 12.1495 1.24892 12.3839C1.51459 12.6183 1.87493 12.75 2.25065 12.75H10.7507Z"
                    fill="#2F87EE"
                  />
                </svg>
                Book
              </Link>

              <a
                href="https://wa.link/siewjn"
                target="_blank"
                rel="noreferrer"
                className="about-list2-button"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4542 14.0622C10.8823 14.0622 10.079 13.8554 8.87603 13.1833C7.41324 12.363 6.28179 11.6057 4.82691 10.1546C3.42417 8.75276 2.74156 7.84514 1.78619 6.10666C0.706889 4.14377 0.890873 3.11486 1.09654 2.67512C1.34146 2.14953 1.70298 1.83518 2.17027 1.52317C2.43568 1.34927 2.71656 1.2002 3.00933 1.07785C3.03863 1.06526 3.06587 1.05324 3.09019 1.0424C3.23521 0.977072 3.45494 0.878341 3.73326 0.98381C3.919 1.05354 4.08482 1.19621 4.34439 1.45256C4.87671 1.97756 5.60415 3.1468 5.87251 3.72102C6.05269 4.10803 6.17193 4.3635 6.17222 4.65002C6.17222 4.98547 6.00347 5.24416 5.79869 5.52336C5.76031 5.5758 5.72222 5.6259 5.68531 5.67453C5.46236 5.9675 5.41343 6.05217 5.44566 6.20334C5.51099 6.50715 5.9982 7.41154 6.79888 8.21047C7.59956 9.0094 8.47788 9.46584 8.78286 9.53088C8.94048 9.56457 9.02691 9.51359 9.32925 9.28273C9.37261 9.24963 9.41714 9.21535 9.46372 9.18108C9.77603 8.94875 10.0227 8.7844 10.3502 8.7844H10.352C10.6371 8.7844 10.8811 8.90803 11.2854 9.11193C11.8127 9.37795 13.0171 10.096 13.5454 10.6289C13.8023 10.8879 13.9456 11.0531 14.0156 11.2386C14.121 11.5178 14.0217 11.7366 13.957 11.8831C13.9461 11.9074 13.9341 11.9341 13.9215 11.9637C13.7982 12.2559 13.6483 12.5362 13.4736 12.801C13.1622 13.2668 12.8466 13.6275 12.3199 13.8727C12.0494 14.0006 11.7534 14.0654 11.4542 14.0622Z"
                    fill="#2F87EE"
                  />
                </svg>
                Phone Call
              </a>
              <a
                href="https://wa.link/siewjn"
                target="_blank"
                rel="noreferrer"
                className="about-list2-button"
              >
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9546 2.0642C14.852 2.00063 14.7349 1.96438 14.6144 1.95893C14.4938 1.95347 14.3739 1.97898 14.2661 2.03303L12.4577 2.93758V2.66699C12.4577 1.49541 11.5043 0.541992 10.3327 0.541992H2.54102C1.36943 0.541992 0.416016 1.49541 0.416016 2.66699V8.33366C0.416016 9.50524 1.36943 10.4587 2.54102 10.4587H10.3327C11.5043 10.4587 12.4577 9.50524 12.4577 8.33366V8.06308L14.2661 8.96691C14.3738 9.0214 14.4937 9.04722 14.6143 9.04189C14.7349 9.03655 14.8521 9.00024 14.9546 8.93645C15.1635 8.80683 15.291 8.57945 15.291 8.33366V2.66699C15.291 2.4212 15.1635 2.19383 14.9546 2.0642ZM3.95768 6.56283C3.81589 6.56653 3.6748 6.54182 3.54271 6.49013C3.41063 6.43844 3.29023 6.36083 3.18861 6.26187C3.087 6.16292 3.00623 6.04461 2.95106 5.91394C2.89589 5.78327 2.86745 5.64288 2.8674 5.50104C2.86735 5.3592 2.8957 5.21879 2.95078 5.08809C3.00586 4.95738 3.08656 4.83903 3.18811 4.74C3.28965 4.64097 3.41 4.56328 3.54205 4.51151C3.6741 4.45973 3.81518 4.43492 3.95697 4.43853C4.23393 4.44559 4.49717 4.56055 4.69059 4.75889C4.88401 4.95724 4.99231 5.22329 4.9924 5.50033C4.99249 5.77738 4.88437 6.0435 4.69108 6.24197C4.4978 6.44045 4.23463 6.55558 3.95768 6.56283Z"
                    fill="#2F87EE"
                  />
                </svg>
                Video Call
              </a>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center max-h-[600px] rounded-lg overflow-hidden md:p-5">
          <img className="border-none w-full h-full object-cover rounded-lg max-sm:min-h-80" src="about2.png" alt="" />
        </div>
      
      </div>

      {/* 6 */}

      <div className="flex flex-col gap-2 justify-center items-center mt-20">
        <h2 className="text-4xl font-bold text-black">Our Services</h2>
        <div className="text-xl text-center max-md:max-w-md">
          We offer comprehensive medical care to address a wide range of health
          needs.
        </div>
      </div>

      {/* 7 */}

      <div className="card-container-new pt-10 max-w-screen-2xl mx-auto">
        <div className="card-new">
          <img src="s1.png" alt="s1" />
          <h1>Dentist</h1>
          <p>
            Dentists are healthcare professionals who specialize in the
            diagnosis, treatment, and prevention of oral health issues.
          </p>
        </div>
        <div className="card-new">
          <img src="s2.png" alt="s2" />
          <h1>Cardiologist</h1>
          <p>
            Cardiologists are physicians specializing in the diagnosis,
            treatment, and prevention of heart-related conditions and diseases.
          </p>
        </div>
        <div className="card-new">
          <img src="s3.png" alt="s3" />
          <h1>Child Specialist</h1>
          <p>
            Child specialists diagnose conditions, promote healthy growth and
            development, and guide to parents on child healthcare.
          </p>
        </div>

        <div className="card-new">
          <img src="s4.png" alt="s4" />
          <h1>Gastroenterologists </h1>
          <p>
            Gastroenterologists are medical specialists who diagnose and treat
            disorders of the digestive system, including the esophagus, stomach,
            intestines, liver and pancreas.
          </p>
        </div>
        <div className="card-new">
          <img src="s5.png" alt="s5" />
          <h1>Heart Caring</h1>
          <p>
            Heart Caring encompasses practices aimed at promoting cardiovascular
            health. This includes lifestyle choices like regular exercise and a
            healthy diet.
          </p>
        </div>
        <div className="card-new">
          <img src="s6.png" alt="s6" />
          <h1>Pharmacist</h1>
          <p>
            Pharmacists are healthcare professionals responsible for dispensing
            medications, ensuring patient safety, and providing medication
            counseling.{" "}
          </p>
        </div>
      </div>

      {/* 8 */}

      {/* <div className="contact-container">
        <div className="contact-img">
          <img className="contact-image" src="contact.png" alt="contact" />
        </div>
        <form className="consultation-form">
          <h2 className="contact-qa">Do You have Any Question?</h2>
          <div className="form-row">
            <input
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
            />

            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Phone" name="phone" />

            <input type="text" placeholder="Subject" name="subject" required />
          </div>
          <div className="form-message">
            <textarea
              placeholder=""
              id="message"
              cols="40"
              name="message"
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div> */}
    </main>
  );
}

export default HomeNew;
