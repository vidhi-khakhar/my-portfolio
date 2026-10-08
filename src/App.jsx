import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollManager from './components/ScrollManager';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CvPage from './pages/CvPage';

function HomePage() {
  return (
    <>
      <Home />
      <About />
      <Education />
      <Work />
      <Projects />
    </>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;