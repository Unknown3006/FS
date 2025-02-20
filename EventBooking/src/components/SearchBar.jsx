import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // This triggers the search
    console.log('Search term:', value); // Debug log
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search events by name or location..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default SearchBar;
