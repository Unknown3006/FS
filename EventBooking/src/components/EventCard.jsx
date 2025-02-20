import { useNavigate } from 'react-router-dom';
import WishlistButton from './WishlistButton';

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${event.id}`);
  };

  const handleViewDetails = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Location:</span> {event.location}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Date:</span> {event.date}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Price:</span> {event.price}
      </p>
      
      <div className="flex items-center justify-between mt-4">
        <WishlistButton eventId={event.id} />
        <div className="space-x-2">
          <button
            onClick={handleViewDetails}
            className="px-4 py-2 text-blue-500 hover:text-blue-600"
          >
            View Details
          </button>
          <button
            onClick={handleBooking}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard; 