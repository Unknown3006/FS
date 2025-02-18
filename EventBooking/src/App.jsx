import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Confirmation from './pages/Confirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="container mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
