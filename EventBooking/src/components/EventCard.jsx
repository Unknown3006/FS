import { useNavigate } from 'react-router-dom';
import WishlistButton from './WishlistButton';

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg shadow-cyan-500/20 p-6 hover:scale-105 transition-all duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-cyan-400 mb-3">{event.name}</h3>
      <p className="text-lg text-gray-300 mb-2">
        <span className="text-pink-500">Location:</span> {event.location}
      </p>
      <p className="text-lg text-gray-300 mb-2">
        <span className="text-pink-500">Date:</span> {event.date}
      </p>
      <p className="text-lg text-gray-300 mb-4">
        <span className="text-pink-500">Price:</span> {event.price}
      </p>
      
      <div className="flex items-center justify-between mt-6">
        <WishlistButton eventId={event.id} />
        <div className="space-x-3">
          <button
            onClick={() => navigate(`/events/${event.id}`)}
            className="px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            View Details
          </button>
          <button
            onClick={() => navigate(`/booking/${event.id}`)}
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-900 px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard; 