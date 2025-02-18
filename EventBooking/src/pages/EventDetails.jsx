import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../mockData';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1
  });

  useEffect(() => {
    // Using mock data for testing
    const event = events.find(e => e.id === parseInt(id));
    setEvent(event);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with actual booking API call
    try {
      await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
          ...formData
        }),
      });
      navigate('/confirmation');
    } catch (error) {
      console.error('Error booking event:', error);
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <img 
          src={event.image || 'https://via.placeholder.com/800x400'} 
          alt={event.name} 
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
        <div className="mb-6">
          <p className="text-gray-600 mb-2">{event.location}</p>
          <p className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
          <p className="text-primary font-bold">₹{event.price}</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              required
              className="w-full p-2 border rounded"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              required
              className="w-full p-2 border rounded"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Number of Tickets</label>
            <input
              type="number"
              min="1"
              required
              className="w-full p-2 border rounded"
              value={formData.tickets}
              onChange={(e) => setFormData({...formData, tickets: parseInt(e.target.value)})}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails; 