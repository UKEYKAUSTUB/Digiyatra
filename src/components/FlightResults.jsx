import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const sampleFlights = [
  { id: 1, airline: "IndiGo", departure: "Pune", destination: "Mumbai", price: "₹2500", time: "10:00 AM" },
  { id: 2, airline: "Air India", departure: "Pune", destination: "Mumbai", price: "₹2700", time: "12:30 PM" },
];

const FlightResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { departure, destination } = location.state || {};
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const filteredFlights = sampleFlights.filter(
        (flight) =>
          flight.departure.toLowerCase() === departure.toLowerCase() &&
          flight.destination.toLowerCase() === destination.toLowerCase()
      );
      setFlights(filteredFlights);
      setLoading(false);
    }, 3000); // Adjusted duration to 3 seconds
  }, [departure, destination]);

  const handleBook = () => {
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen bg-white">
        <img src="Aeroplane_loading.gif" alt="Loading..." className="w-1/2 h-auto object-contain" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h2 className="text-3xl font-bold mb-6">Filtered Flights</h2>
      {flights.length > 0 ? (
        flights.map((flight) => (
          <div key={flight.id} className="flex justify-between items-center border border-gray-300 bg-white p-4 rounded-lg mb-3 w-full max-w-lg shadow-md">
            <div>
              <p><strong>Airline:</strong> {flight.airline}</p>
              <p><strong>Time:</strong> {flight.time}</p>
              <p><strong>Price:</strong> {flight.price}</p>
            </div>
            <button
              onClick={handleBook}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center"
            >
              <FaBook className="mr-2" /> Book
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-700 text-lg">No flights found</p>
      )}
    </div>
  );
};

export default FlightResults;
