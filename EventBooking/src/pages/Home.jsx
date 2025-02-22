import { Link } from 'react-router-dom';
import AuthForms from '../components/AuthForms';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6 animate-pulse">
          Welcome to EventBooker
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover and book amazing events in your city
        </p>
        <Link
          to="/events"
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-900 px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20 text-lg font-semibold"
        >
          Browse Events
        </Link>
      </div>
      
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg shadow-cyan-500/20 p-8">
        <AuthForms />
      </div>
    </div>
  );
}

export default Home; 