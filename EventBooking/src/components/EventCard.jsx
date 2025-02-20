import { useNavigate } from 'react-router-dom';

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate(`/booking/${event.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-2">
        <span className="font-medium">Location:</span> {event.location}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Date:</span> {event.date}
      </p>
      <button
        onClick={handleBooking}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Book Now
      </button>
    </div>
  );
}

export default EventCard; 