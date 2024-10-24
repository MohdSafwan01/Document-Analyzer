import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, User } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FileText className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">DocAnalyzer</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${isActive('/')} font-medium transition-colors duration-200`}>
              Home
            </Link>
            <Link to="/upload" className={`${isActive('/upload')} font-medium transition-colors duration-200`}>
              Upload
            </Link>
            <Link to="/search" className={`${isActive('/search')} font-medium transition-colors duration-200`}>
              Search
            </Link>
            <Link to="/auth" className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;