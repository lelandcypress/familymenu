import "./App.css";
import Nav from "./components/Navigation";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
