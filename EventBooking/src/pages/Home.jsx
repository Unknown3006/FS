import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import { events } from '../mockData'; // Import the mock data

const Home = () => {
  const [eventsList, setEventsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Set the mock data
    setEventsList(events);
  }, []);

  const filteredEvents = eventsList.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search events by name or location..."
          className="w-full p-4 border rounded-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Home; 