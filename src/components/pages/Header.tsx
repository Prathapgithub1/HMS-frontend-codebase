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
            <span className="text-xs text-gray-500 uppercase tracking-wider">
              Hospital Management System
            </span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#services" className="hover:text-blue-600 transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            About Us
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            Contact Us
          </a>
          <a href="#support" className="hover:text-blue-600 transition-colors">
            Support
          </a>
          <a href="#login" className="hover:text-blue-600 transition-colors">
            Login
          </a>
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
