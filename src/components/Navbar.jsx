import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to track which page is currently active
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <nav className="flex gap-4 py-4 items-center px-2 text-white font-bold bg-blue-900 mb-4">
      {/* Brand or Logo */}
      <h1 className="text-2xl font-bold mr-2 lg:mr-6">JobHunt</h1>

      {/* Home Link */}
      <Link
        to="/"
        className="relative"
        onClick={() => setCurrentPage("Home")}
      >
        Home
        {/* Show underline if Home is active */}
        {currentPage === "Home" && (
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-white"></span>
        )}
      </Link>

      {/* Favourites Link */}
      <Link
        to="/favorites"
        className="relative"
        onClick={() => setCurrentPage("Favourites")}
      >
        Favourites
        {/* Show underline if Favourites is active */}
        {currentPage === "Favourites" && (
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-white"></span>
        )}
      </Link>
    </nav>
  );
}

export default Navbar;
