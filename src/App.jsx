import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header/Header";
import Home from "./pages/1.home/Home";
import Service from "./pages/2.services/Service";
import Portfolio from "./pages/3.portfolio/Portfolio";
import Result from "./pages/4. result/Result";
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
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/result" element={<Result />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
