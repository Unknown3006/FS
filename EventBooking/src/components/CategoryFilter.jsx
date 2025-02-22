import React from 'react';

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-cyan-400">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-xl transition-all duration-300 ${
            !selectedCategory 
              ? 'bg-cyan-500 text-gray-900' 
              : 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-xl transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-cyan-500 text-gray-900'
                : 'bg-gray-800 text-cyan-400 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter; 