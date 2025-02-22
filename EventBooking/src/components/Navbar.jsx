import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <nav className="bg-gray-900 shadow-lg shadow-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-all duration-300">
              EventBooker
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/events" 
              className="text-lg text-gray-300 hover:text-cyan-400 transition-all duration-300"
            >
              {t('nav.events')}
            </Link>
            
            <LanguageSwitcher />
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 text-cyan-400 hover:bg-gray-700 hover:text-cyan-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/20"
              >
                👤
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg shadow-cyan-500/20 py-1 z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('nav.profile')}
                  </Link>
                  <Link
                    to="/profile/bookings"
                    className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('nav.bookings')}
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-300"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {t('nav.logout')}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 