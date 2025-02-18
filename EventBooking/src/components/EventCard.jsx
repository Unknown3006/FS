import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.image || 'https://via.placeholder.com/300x200'} 
        alt={event.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
        <p className="text-gray-600 mb-2">{event.location}</p>
        <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
        <p className="text-primary font-bold mb-4">₹{event.price}</p>
        <Link 
          to={`/event/${event.id}`}
          className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition-colors"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default EventCard; 