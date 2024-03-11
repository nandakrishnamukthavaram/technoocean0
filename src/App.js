import Header from "./Components/Header/Header.jsx";
import Home from "./Components/Home/Home.jsx";
import Prices from "./Components/Prices/Prices.jsx";
import Schedule from "./Components/Schedule/Schedule.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
