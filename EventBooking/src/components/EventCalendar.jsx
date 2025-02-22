import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventCalendar({ events }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Get events for a specific day
  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date || event.releaseDate);
      return eventDate.getDate() === day &&
             eventDate.getMonth() === currentMonth.getMonth() &&
             eventDate.getFullYear() === currentMonth.getFullYear();
    });
  };

  const handleDayClick = (day, dayEvents) => {
    setSelectedDate(day);
    setSelectedEvent(null);
  };

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const days = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Event Details Panel - Left Side */}
      <div className="md:col-span-1">
        {selectedEvent ? (
          <div className="bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/20 p-6">
            <img
              src={selectedEvent.image || 'https://via.placeholder.com/400x200'}
              alt={selectedEvent.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">
              {selectedEvent.name}
            </h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="text-pink-500">Type:</span> {selectedEvent.type}
              </p>
              <p className="text-gray-300">
                <span className="text-pink-500">Location:</span> {selectedEvent.location}
              </p>
              <p className="text-gray-300">
                <span className="text-pink-500">Date:</span>{' '}
                {new Date(selectedEvent.date || selectedEvent.releaseDate).toLocaleDateString()}
              </p>
              <p className="text-gray-300">
                <span className="text-pink-500">Price:</span> {selectedEvent.price}
              </p>
              {selectedEvent.duration && (
                <p className="text-gray-300">
                  <span className="text-pink-500">Duration:</span> {selectedEvent.duration}
                </p>
              )}
              {selectedEvent.rating && (
                <p className="text-gray-300">
                  <span className="text-pink-500">Rating:</span> {selectedEvent.rating}⭐
                </p>
              )}
            </div>
            <button
              onClick={() => navigate(`/events/${selectedEvent.id}`)}
              className="w-full mt-4 bg-cyan-500 text-gray-900 py-2 rounded-lg hover:bg-cyan-400 transition-all duration-300"
            >
              Book Now
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/20 p-6">
            <p className="text-gray-400 text-center">
              Select an event to view details
            </p>
          </div>
        )}
      </div>

      {/* Calendar - Right Side */}
      <div className="md:col-span-2 bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/20 p-6">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => {
              setSelectedDate(null);
              setSelectedEvent(null);
              setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
            }}
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-2xl"
          >
            ←
          </button>
          <h2 className="text-2xl font-semibold text-cyan-400">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button
            onClick={() => {
              setSelectedDate(null);
              setSelectedEvent(null);
              setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
            }}
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-2xl"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center font-semibold text-pink-500 py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {[...Array(firstDay)].map((_, i) => (
            <div key={`empty-${i}`} className="h-28 bg-gray-900/50 rounded-lg"></div>
          ))}
          {[...Array(days)].map((_, i) => {
            const day = i + 1;
            const dayEvents = getEventsForDay(day);
            return (
              <div
                key={day}
                onClick={() => handleDayClick(day, dayEvents)}
                className={`h-28 rounded-lg p-2 transition-all duration-300 cursor-pointer
                  ${dayEvents.length > 0 ? 'bg-gray-700/50 hover:bg-gray-600/50' : 'bg-gray-900/50'}
                  ${selectedDate === day ? 'ring-2 ring-cyan-400' : ''}
                `}
              >
                <div className="font-semibold text-gray-300 mb-1">{day}</div>
                <div className="space-y-1 overflow-y-auto max-h-20">
                  {dayEvents.map((event) => (
                    <div
                      key={event.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event);
                      }}
                      className={`text-xs p-1 rounded truncate cursor-pointer transition-all duration-300
                        ${selectedEvent?.id === event.id 
                          ? 'bg-cyan-500 text-gray-900' 
                          : 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'}
                      `}
                      title={event.name}
                    >
                      {event.name}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default EventCalendar; 