import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Officers from "./pages/Officers.tsx";
import Register from "./pages/Register.tsx";
import Events from "./pages/Events.tsx";
import ContactUs from "./pages/ContactUs.tsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
