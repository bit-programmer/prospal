import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import ConfessionPage from './pages/ConfessionPage';
import SuccessPage from './pages/SuccessPage';
import RejectionPage from './pages/RejectionPage';
import FloatingHearts from './components/FloatingHearts';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/confession" element={<ConfessionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/rejection" element={<RejectionPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <FloatingHearts />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
