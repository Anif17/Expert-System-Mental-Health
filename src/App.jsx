import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/common/Header";
import Footer from "./components/common/Footer";
import ExpertSystem from "./components/ExpertSystem/ExpertSystem";
import QuestionForm from "./components/FormQuestion/Form_question";
import Team from "./components/Team/Team";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/result" element={<ExpertSystem />} />
            <Route path="/check" element={<QuestionForm />} />
            <Route path="/team" element={<Team />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
