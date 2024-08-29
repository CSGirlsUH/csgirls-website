import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Officers from './pages/Officers.tsx';
import Sponsors from './pages/Sponsors.tsx';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/officers" element={<Officers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Home event={true} />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
