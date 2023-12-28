import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Header";
import Home from "./pages/home/Home";
import Footer from "./components/common/Footer";
import ExpertSystem from "./pages/expertSystem/ExpertSystem";
import QuestionForm from "./pages/formQuestion/Form_question";
import Team from "./pages/team/Team";

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
