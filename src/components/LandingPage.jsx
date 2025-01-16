// import React, { useState } from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import "./LandingPage.css"; // Make sure this file is linked
// import axios from "axios";
// import Logo from "../assets/logo.png";

// const LandingPage = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubscribe = async () => {
//     if (!email) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       const response = await axios.post("/subscribe", {
//         email,
//       });
//       setMessage(response.data.message);
//       setEmail("");
//       setSubmitted(true);
//     } catch (err) {
//       setMessage(
//         err.response?.data?.error ||
//           err.message ||
//           "Something went wrong. Please try again."
//       );
//       console.log(err);
//     }
//   };

//   return (
//     <div className="landing-container">
//       <div className="logo-title-container">
//         <img src={Logo} alt="logo" className="main-logo" />
//         <h1 className="logo">Sahachary</h1>
//       </div>
//       <div className="content">
//         <h1 className="coming-soon">Coming Soon</h1>
//         <p className="notification-text">
//           Get notified when the site goes live:
//         </p>
//       </div>
//       {submitted ? (
//         <p className="message">{message}</p>
//       ) : (
//         <div className="subscribe-container">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="email-input"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <button
//             className="subscribe-button"
//             onClick={handleSubscribe}
//             disabled={submitted}
//           >
//             {submitted ? "Subscribed" : "Subscribe"}
//           </button>
//         </div>
//       )}
//       {message && !submitted && <p className="message">{message}</p>}
//       <div className="contact-container">
//         <p className="contact-text">
//           If you have any questions, please contact us at:
//         </p>
//         <p className="email">team@sahachary.com</p>
//       </div>
//       <div className="social-icons">
//         <a
//           href="https://twitter.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Twitter"
//           className="social-link"
//         >
//           <FaTwitter />
//         </a>
//         <a
//           href="https://www.instagram.com/sahachary_india/"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Instagram"
//           className="social-link"
//         >
//           <FaInstagram />
//         </a>
//         <a
//           href="https://www.linkedin.com/company/sahachary"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="LinkedIn"
//           className="social-link"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://www.facebook.com/profile.php?id=61571588506874&mibextid=ZbWKwL"
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="Facebook"
//           className="social-link"
//         >
//           <FaFacebook />
//         </a>
//       </div>
//       <footer className="footer">
//         &copy; Sahachary{new Date().getFullYear()}. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default LandingPage;

import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import axios from "axios";
import Logo from "../assets/logo.png";
import "./LandingPage.css";

const LandingPage = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await axios.post("/subscribe", {
        email,
      });
      setMessage(response.data.message);
      setEmail("");
      setSubmitted(true);
    } catch (err) {
      setMessage(
        err.response?.data?.error ||
          err.message ||
          "Something went wrong. Please try again."
      );
      console.log(err);
    }
  };

  return (
    <div
      className="h-screen lg:h-screen  w-screen md:h-screen sm:h-screen  flex flex-col bg-gradient-to-r from-pink-100 via-yellow-50 to-blue-200 "
      style={{ height: "100%" }}
    >
      <div className="logo-title-container mt-4">
        <img src={Logo} alt="main-logo" className="main-logo" />
        <h1 className="flex flex-start   font-extrabold text-[#282828] text-[24px]   ml-3">
          Sahachary
        </h1>
      </div>
      <div className="flex items-center justify-center mt-8 bg-red flex-col">
        <h1 className="font-bold font-montserrat  text-6xl  w-full px-24 text-center lg:text-[128px] lg:font-bold">
          Coming Soon
        </h1>
        <p className="font-montserrat font-medium my-8 text-lg mt-[50px] text-[#282828] lg:text-2xl md:text-2xl ">
          Get notified when site goes live:
        </p>
      </div>
      <div className="flex items-center justify-center my-4 bg-red flex-col lg:hidden md:hidden">
        <p className="font-montserrat font-medium text-base mt-[20px] text-[#282828]">
          If you have any questions, please contact us at:
        </p>
        <p className=" font-montserrat font-semibold text-2xl text-[#FFCC00] mt-[20px]">
          team@sahachary.com
        </p>
      </div>

      {submitted ? (
        <p className="message">{message}</p>
      ) : (
        <div className="flex mt-20 lg:my-0 md:my-0  items-center justify-center flex-col gap-4 lg:flex lg:flex-row md:flex md:flex-row ">
          <input
            className="border-[1px] rounded-2xl p-[13px] pr-[245px]   md:text-2xl md:font-normal lg:text-2xl lg:font-normal border-[#282828] lg:pr-[300px] md:pr-[300px]"
            placeholder="abc@gmail.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            disabled={submitted}
            className=" rounded-2xl p-[12px] px-32 lg:p-[12px] md:p-[12px] font-montserrat font-medium text-2xl bg-[#FFCC00]  border-[#282828] items-center  "
          >
            {submitted ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      )}

      {message && !submitted && <p className="message">{message}</p>}

      <div className=" items-center   justify-center  bg-red flex-col hidden lg:flex md:flex">
        <p className="font-montserrat font-medium text-base mt-[20px] text-[#282828]">
          If you have any questions, please contact us at:
        </p>

        <p className=" font-montserrat font-semibold text-2xl text-[#FFCC00] mt-[20px]">
          team@sahachary.com
        </p>
      </div>

      {/* icons */}
      <div className=" mt-32 lg:mt-10 md:my-0  flex items-center justify-center space-x-4 text-gray-500">
        <a
          href="https://twitter.com"
          target="_blank"
          className="hover:text-gray-700  text-3xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/sahachary_india/"
          target="_blank"
          className="hover:text-gray-700  text-3xl"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/company/sahachary"
          target="_blank"
          className="hover:text-gray-700  text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61571588506874&mibextid=ZbWKwL"
          target="_blank"
          className="hover:text-gray-700  text-3xl"
        >
          <FaFacebook />
        </a>
      </div>
      <footer className="mt-6 mb-5 text-base lg:text-xl font-medium font-montserrat items-center flex justify-center text-[#282828]">
        &copy; Sahachary2024. All rights reserved
      </footer>
    </div>
  );
};

export default LandingPage;
