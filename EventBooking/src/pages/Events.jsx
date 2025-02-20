import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import CategoryFilter from '../components/CategoryFilter';
import EventCalendar from '../components/EventCalendar';
import { useTranslation } from 'react-i18next';

function Events() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'calendar'
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    'Music',
    'Tech',
    'Sports',
    'Food',
    'Arts',
    'Business',
    'Cultural'
  ];

  const initialEvents = [
    { 
      id: 1, 
      name: 'Bollywood Music Festival', 
      location: 'Mumbai', 
      date: '2024-04-01',
      category: 'Music',
      price: '₹1500' 
    },
    { 
      id: 2, 
      name: 'Tech Conference', 
      location: 'Bangalore', 
      date: '2024-04-15',
      category: 'Tech',
      price: '₹2000' 
    },
    // Add more events...
  ];

  const [events] = useState(initialEvents);
  const [filteredEvents, setFilteredEvents] = useState(initialEvents);

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
      filtered = filtered.filter(event => event.category === selectedCategory);
    }
    
    setFilteredEvents(filtered);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    let filtered = events;
    
    if (category) {
      filtered = events.filter(event => event.category === category);
    }
    
    setFilteredEvents(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded ${
              viewMode === 'grid' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode('calendar')}
            className={`px-4 py-2 rounded ${
              viewMode === 'calendar' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
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
        onSelectCategory={handleCategorySelect}
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
