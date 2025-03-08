import "./App.css";
// import EasyUpload from "./components/AddRecipt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>

      {/* <EasyUpload /> */}
    </div>
  );
}

export default App;
