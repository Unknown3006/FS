import { useState, useEffect } from 'react';
import { eventApi } from '../services/eventApi';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import CategoryFilter from '../components/CategoryFilter';
import EventCalendar from '../components/EventCalendar';
import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'calendar'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = [
    'Movie',
    'Concert',
    'Theatre',
    'Comedy',
    'Sports',
    'Festival'
  ];

  useEffect(() => {
    fetchEvents();
  }, []);

  // Update filtered events whenever category or events change
  useEffect(() => {
    filterEvents();
  }, [selectedCategory, events]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await eventApi.getAllEvents();
      setEvents(response.data);
      setFilteredEvents(response.data);
    } catch (err) {
      setError('Failed to fetch events');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterEvents = () => {
    let filtered = events;
    
    if (selectedCategory) {
      filtered = events.filter(event => event.type === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  };

  const handleSearch = (searchTerm) => {
    let filtered = events;
    
    if (searchTerm) {
      filtered = events.filter((event) => {
        const nameMatch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
        const locationMatch = event.location.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || locationMatch;
      });
    }
    
    if (selectedCategory) {
      filtered = filtered.filter(event => event.type === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 text-xl">{error}</p>
        <button 
          onClick={fetchEvents}
          className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded-xl hover:bg-cyan-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-cyan-400">Events</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              viewMode === 'grid' 
                ? 'bg-cyan-500 text-gray-900' 
                : 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              viewMode === 'calendar' 
                ? 'bg-cyan-500 text-gray-900' 
                : 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
            }`}
          >
            Calendar View
          </button>
        </div>
      </div>

      <SearchBar onSearch={handleSearch} />
      
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <EventCalendar events={filteredEvents} />
      )}
    </div>
  );
}

export default Events;
