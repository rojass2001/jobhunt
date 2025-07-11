import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <nav className="flex gap-4 py-4 items-center px-2 text-white font-bold bg-blue-900 mb-4">
        <h1 className='text-2xl font-bold mr-2 lg:mr-6'>JobHunt</h1>
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
  )
}

export default Navbar
