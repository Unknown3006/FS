import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './i18n';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import BookingPage from './pages/BookingPage';
import Profile from './pages/Profile';
import EventDetails from './pages/EventDetails';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-900 text-gray-300">
          <Navbar />
          <div className="bg-gradient-to-b from-gray-900 to-gray-800">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:eventId" element={<EventDetails />} />
              <Route path="/booking/:eventId" element={<BookingPage />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
