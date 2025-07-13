import { useEffect, useState } from 'react';    // Static job data source
import JobCard from '../components/Jobscard';   // Reusable job card component
import Favouritecard from '../components/Favouritecard';
import { Link } from 'react-router-dom';

export default function FavoritesPage() {
  // State to hold favorite jobs
 const [favs, setFavs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavs(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = favs.filter((job) => job.id !== id);
    localStorage.setItem('favourites', JSON.stringify(updated));
    setFavs(updated);
  };


  return (
    <div className='max-sm:px-2'>
      {/* Page heading */}
      <h2 className="text-2xl max-sm:text-center font-bold mb-4">Favorite Jobs</h2>

      {/* Show message if no favorites are found */}
   
      {favs?.length ===0&& <p className="text-gray-500 max-sm:text-center">No favorite jobs found.</p>
      
      
}
         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {favs?.map(job => (
              <Favouritecard handledelete={()=>handleRemove(job.id)}  key={job.id} job={job} />
            ))}
          </div>
      
    </div>
  );
}
