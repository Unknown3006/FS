import { useState } from 'react';

function EventCalendar({ events }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const days = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
          className="text-gray-600 hover:text-gray-900"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button
          onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
          className="text-gray-600 hover:text-gray-900"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {[...Array(firstDay)].map((_, i) => (
          <div key={`empty-${i}`} className="h-24 bg-gray-50 rounded-lg"></div>
        ))}
        {[...Array(days)].map((_, i) => (
          <div
            key={i + 1}
            className="h-24 border rounded-lg p-2 hover:bg-gray-50 cursor-pointer"
          >
            <div className="font-semibold mb-1">{i + 1}</div>
            {/* Add event indicators here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar; 