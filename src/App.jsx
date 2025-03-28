import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightSearch from "./components/FlightSearch";
import Login from "./components/login"
import BoardingPass from "./components/BoardingPass";
import FlightResults from "./components/FlightResults";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<FlightSearch />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/boarding-pass" element={<BoardingPass/>} />
      <Route path="/results" element={<FlightResults />} />
    </Routes>
  </Router>
  );
}

export default App;
