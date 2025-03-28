import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useLocation } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const BoardingPass = () => {
  const location = useLocation();
  const { name, email, departure, destination, time, seat, image } = location.state || {};

  const downloadPDF = () => {
    const input = document.getElementById("boarding-pass");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 180, 150);
      pdf.save("boarding-pass.pdf");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div id="boarding-pass" className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-300 text-center">
        <h2 className="text-2xl font-bold mb-4">Boarding Pass</h2>
        
        {/* Display Captured Image */}
        {image && (
          <img 
            src={image} 
            alt="Captured Face" 
            className="w-32 h-32 mx-auto rounded-full border border-gray-300 mb-3"
          />
        )}

        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{email}</p>
        <div className="border-t border-gray-300 my-4"></div>
        <p><strong>Departure:</strong> {departure}</p>
        <p><strong>Destination:</strong> {destination}</p>
        <p><strong>Time:</strong> {time}</p>
        <p><strong>Seat:</strong> {seat}</p>

        {/* QR Code and Additional Image */}
        <div className="flex justify-center items-center gap-4 my-4">
          <QRCodeCanvas 
            value={`Name: ${name}, Departure: ${departure}, Destination: ${destination}, Seat: ${seat}`} 
            size={100} 
          />
          <img src="/Approved.png" alt="Boarding" className="w-24 h-24 border border-gray-300" />
        </div>

        {/* Download PDF Button */}
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
          onClick={downloadPDF}
        >
          Download Pass
        </button>
      </div>
    </div>
  );
};

export default BoardingPass;
