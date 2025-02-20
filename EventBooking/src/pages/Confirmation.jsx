import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your booking. We have sent a confirmation email with all the details.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Confirmation; 