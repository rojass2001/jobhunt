import { useEffect, useState } from 'react';
import jobsData from '../data/jobs.json';       // Static job data source
import JobCard from '../components/Jobscard';   // Reusable job card component

export default function FavoritesPage() {
  // State to hold the list of favorite jobs
  const [favorites, setFavorites] = useState([]);

  // useEffect runs once when the component mounts
  useEffect(() => {
    // Get favorite job IDs from localStorage
    const favIds = JSON.parse(localStorage.getItem('favorites') || '[]');

    // Filter jobs from jobsData that match the favorite IDs
    const favJobs = jobsData.filter(job => favIds.includes(job.id));

    // Set the filtered jobs as favorites
    setFavorites(favJobs);
  }, []);

  return (
    <div className=''>
      {/* Page heading */}
      <h2 className="text-2xl font-bold mb-4">Favorite Jobs</h2>

      {/* Show message if no favorites are found */}
      {favorites.length === 0
        ? <p className="text-gray-500">No favorite jobs found.</p>
        
        // Render the favorite jobs in a responsive grid
        : <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {favorites.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
      }
    </div>
  );
}
