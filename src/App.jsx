import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Header";
import Home from "./pages/home/Home";
// import Service from "./pages/services/Service";
import Portfolio from "./pages/portfolio/Portfolio";
// import Result from "./pages/result/Result";
import Footer from "./components/common/Footer";
import ExpertSystem from "./components/ExpertSystem/ExpertSystem";
import QuestionForm from "./pages/form_question/Form_question";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/Services" element={<Service />} /> */}
            <Route path="/Portfolio" element={<Portfolio />} />
            {/* <Route path="/Result" element={<Result />} /> */}
            <Route path="/expertSystem" element={<ExpertSystem />} />
            <Route path="/questionForm" element={<QuestionForm />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
