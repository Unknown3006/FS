import { useState } from 'react';

function Profile() {
  const [userProfile, setUserProfile] = useState({
    name: 'User Name',
    email: 'user@example.com',
    phone: '',
    preferences: [],
    bookings: [
      { id: 1, eventName: 'Bollywood Music Festival', date: '2024-04-01', status: 'Confirmed' },
      { id: 2, eventName: 'Tech Conference', date: '2024-04-15', status: 'Pending' }
    ]
  });

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={userProfile.name}
              className="w-full px-4 py-2 rounded-lg border"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={userProfile.email}
              className="w-full px-4 py-2 rounded-lg border"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone</label>
            <input
              type="tel"
              value={userProfile.phone}
              className="w-full px-4 py-2 rounded-lg border"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">My Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 text-left">Event</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {userProfile.bookings.map((booking) => (
                <tr key={booking.id} className="border-t">
                  <td className="px-4 py-2">{booking.eventName}</td>
                  <td className="px-4 py-2">{booking.date}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <button className="text-blue-500 hover:text-blue-700">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Profile; 