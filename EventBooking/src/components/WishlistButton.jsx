import { useState } from 'react';

function WishlistButton({ eventId }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    // Add logic to update wishlist in backend
  };

  return (
    <button
      onClick={toggleWishlist}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
        isWishlisted 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {isWishlisted ? '♥' : '♡'}
      {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
    </button>
  );
}

export default WishlistButton; 