import { Link } from 'react-router-dom';
import AuthForms from '../components/AuthForms';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to EventBooker
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover and book amazing events in your city
        </p>
        <Link
          to="/events"
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Browse Events
        </Link>
      </div>
      
      <AuthForms />
    </div>
  );
}

export default Home; 