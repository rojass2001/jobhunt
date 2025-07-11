import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import FavoritesPage from './Pages/Favourite';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <Router>
      <div className="">
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/jobhunt' element={<Home />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}