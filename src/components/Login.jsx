import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { FaCamera, FaTicketAlt } from "react-icons/fa";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [departure, setDeparture] = useState("Pune");
  const [destination, setDestination] = useState("Mumbai");
  const [time, setTime] = useState("10:00 AM");
  const [seat, setSeat] = useState("A23");
  const [image, setImage] = useState(null);
  const [showWebcam, setShowWebcam] = useState(false);
  const webcamRef = useRef(null);
  const navigate = useNavigate();

  // Capture Image from Webcam
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setShowWebcam(false); // Hide webcam after capturing
  };

  // Generate Boarding Pass
  const generateBoardingPass = () => {
    if (!image) {
      alert("Please capture an image first!");
      return;
    }

    navigate("/boarding-pass", {
      state: { name, email, departure, destination, time, seat, image },
    });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6">
      {/* Left Section - Header & Image */}
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center p-6">
        {/* Header */}
        <div className="border-l-8 border-gray-800 pl-4 w-full">
          <h1 className="text-3xl font-bold text-gray-800 uppercase leading-tight">
            ENTER DETAILS TO GENERATE YOUR BOARDING PASS
          </h1>
        </div>

        {/* Image Below Header */}
        <img
          src="/Travel.jpg"  // Replace with your image link
          alt="Airport Background"
          className="mt-4 w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Login & Capture</h2>

          {/* Input Fields */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full rounded-lg"
            />
          </div>

          {/* Webcam Button Centered */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowWebcam(!showWebcam)}
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
            >
              <FaCamera className="mr-2" /> Webcam
            </button>
          </div>

          {/* Webcam Section */}
          {showWebcam && (
            <div className="mt-4 relative">
              <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="w-full h-40 rounded-lg" />
              <button
                onClick={captureImage}
                className="absolute bottom-2 right-2 bg-green-500 text-white p-2 rounded-full shadow-lg"
              >
                <FaCamera />
              </button>
            </div>
          )}

          {/* Generate Boarding Pass Button */}
          <button
            onClick={generateBoardingPass}
            disabled={!image}
            className={`mt-4 w-full py-2 rounded-lg flex justify-center items-center ${
              image ? "bg-green-500 text-white" : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
          >
            <FaTicketAlt className="mr-2" /> Generate Boarding Pass
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
