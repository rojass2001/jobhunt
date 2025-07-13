// Importing required components and routing tools
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';                 // Home page component
import FavoritesPage from './Pages/Favourite';  // Page showing favorite jobs
import Navbar from './components/Navbar';       // Top navigation bar
import Filter from './Pages/Filter';            // Page showing filtered job results
import Searchsection from './components/Searchsection'; // Search + filter controls


export default function App() {
  
  
  return (
    // Setting up React Router for navigation
    <Router>
      <div>
        {/* Top navigation bar - remains visible on all pages */}
        <Navbar />

        {/* Search and filter section - placed globally so it appears on all routes */}
        <Searchsection />

        {/* Route definitions for different pages */}
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<Home />} />

          {/* Alternate home route (optional) */}
          <Route path="/jobhunt" element={<Home />} />

          {/* Route for displaying favorite jobs */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* Route for displaying filtered job results */}
          <Route path="/filter" element={<Filter />} />
        </Routes>
      </div>
    </Router>
  );
}
