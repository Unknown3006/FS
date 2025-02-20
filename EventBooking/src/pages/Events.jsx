import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';

function Events() {
  // Sample events data with Indian cities and events
  const initialEvents = [
    { id: 1, name: 'Bollywood Music Festival', location: 'Mumbai', date: '2024-04-01' },
    { id: 2, name: 'Tech Conference', location: 'Bangalore', date: '2024-04-15' },
    { id: 3, name: 'Food & Culture Festival', location: 'Delhi', date: '2024-04-30' },
    { id: 4, name: 'Cricket Tournament', location: 'Chennai', date: '2024-05-01' },
    { id: 5, name: 'Startup Summit', location: 'Hyderabad', date: '2024-05-15' },
    { id: 6, name: 'Classical Dance Show', location: 'Kolkata', date: '2024-05-30' },
    { id: 7, name: 'Comedy Night', location: 'Pune', date: '2024-06-01' },
    { id: 8, name: 'Art Exhibition', location: 'Jaipur', date: '2024-06-15' },
    { id: 9, name: 'Fashion Week', location: 'Mumbai', date: '2024-06-30' }
  ];

  const [events] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredEvents(events);
      return;
    }

    const filtered = events.filter((event) => {
      const nameMatch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
      const locationMatch = event.location.toLowerCase().includes(searchTerm.toLowerCase());
      return nameMatch || locationMatch;
    });

    setFilteredEvents(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Available Events</h1>
      <SearchBar onSearch={handleSearch} />
      
      {filteredEvents.length === 0 ? (
        <p className="text-center text-gray-600 mt-8">No events found matching your search.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Events;
