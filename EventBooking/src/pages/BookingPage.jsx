import { useParams } from 'react-router-dom';

function BookingPage() {
  const { eventId } = useParams();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Book Event</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
