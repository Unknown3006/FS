import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-primary p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">EventBooker</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/events" className="hover:text-gray-200">Events</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 