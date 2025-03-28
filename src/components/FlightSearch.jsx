import React, { useState } from "react";
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FlightSearch = () => {
  const [departure, setDeparture] = useState("Pune");
  const [destination, setDestination] = useState("Mumbai");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/results", { state: { departure, destination, date } });
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/clouds.jpg')", filter: "brightness(0.8)" }}
      ></div>

      {/* Search Box */}
      <div className="relative flex flex-col justify-center items-center min-h-screen px-6">
        <h2 className="text-4xl font-bold mb-6 text-white">Search for Flights</h2>

        {/* Flight Input Fields */}
        <div className="flex space-x-4 mb-4 w-full max-w-lg">
          <div className="relative w-1/2">
            <FaPlaneDeparture className="absolute top-4 left-3 text-white" />
            <select
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="border border-white bg-transparent text-white p-3 pl-10 w-full rounded-lg text-lg focus:outline-none"
            >
              <option className="text-black" value="Pune">Pune</option>
            </select>
          </div>

          <div className="relative w-1/2">
            <FaPlaneArrival className="absolute top-4 left-3 text-white" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="border border-white bg-transparent text-white p-3 pl-10 w-full rounded-lg text-lg focus:outline-none"
            >
              <option className="text-black" value="Mumbai">Mumbai</option>
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div className="relative mb-4 w-full max-w-lg">
          <FaCalendarAlt className="absolute top-4 left-3 text-white" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-white bg-transparent text-white p-3 pl-10 w-full rounded-lg text-lg focus:outline-none"
          />
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg flex justify-center items-center"
        >
          <FaSearch className="mr-2" /> Search Flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
