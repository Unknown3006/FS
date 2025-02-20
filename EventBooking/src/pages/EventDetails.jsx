import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../mockData';
import ReviewSection from '../components/ReviewSection';
import WishlistButton from '../components/WishlistButton';

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event] = useState({
    id: id,
    name: 'Bollywood Music Festival',
    location: 'Mumbai',
    date: '2024-04-01',
    time: '6:00 PM',
    description: 'Join us for an amazing evening of Bollywood music featuring top artists.',
    price: '₹1500',
    category: 'Music',
    organizer: 'EventFlow Entertainment',
    availableSeats: 100,
    images: ['image1.jpg', 'image2.jpg']
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1
  });

  useEffect(() => {
    // Using mock data for testing
    const event = events.find(e => e.id === parseInt(id));
    if (event) {
      setEvent(event);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // For testing purposes, let's skip the API call and directly navigate
      // Remove this condition when you have a working backend
      if (!process.env.NODE_ENV === 'production') {
        navigate('/confirmation');
        return;
      }

      const response = await fetch('http://localhost:5000/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
          ...formData
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      navigate('/confirmation');
    } catch (error) {
      console.error('Error booking event:', error);
      alert('Failed to book event. Please try again.');
    }
  };

  if (!event) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={event.images[0]}
              alt={event.name}
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="p-6 md:w-1/2">
            <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold mb-4">{event.name}</h1>
              <WishlistButton eventId={event.id} />
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Event Details</h2>
                <p className="text-gray-600">{event.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Date</p>
                  <p className="text-gray-600">{event.date}</p>
                </div>
                <div>
                  <p className="font-semibold">Time</p>
                  <p className="text-gray-600">{event.time}</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
                <div>
                  <p className="font-semibold">Price</p>
                  <p className="text-gray-600">{event.price}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold">Organizer</p>
                <p className="text-gray-600">{event.organizer}</p>
              </div>

              <div>
                <p className="font-semibold">Available Seats</p>
                <p className="text-gray-600">{event.availableSeats}</p>
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
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Book Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ReviewSection eventId={id} />
    </div>
  );
};

export default EventDetails; 