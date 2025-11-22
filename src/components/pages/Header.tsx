import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-800">HMS</span>
            <span className="text-xs text-gray-1200 uppercase tracking-wider">
              Hospital Management System
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link to="#home" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            to="#services"
            className="hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link to="#about" className="hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link to="#contact" className="hover:text-blue-600 transition-colors">
            Contact Us
          </Link>
          <Link to="#support" className="hover:text-blue-600 transition-colors">
            Support
          </Link>
          <Link to="/login" className="hover:text-blue-600 transition-colors">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Icon (Optional) */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
