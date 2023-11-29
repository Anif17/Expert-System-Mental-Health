import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Header";
import Home from "./pages/1.home/Home";
import Service from "./pages/2.services/Service";

import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/services" element={<Service />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
