import { useEffect, useState } from 'react';
import jobsData from '../data/jobs.json';
import JobCard from '../components/Jobscard';


export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    const favJobs = jobsData.filter(job => favIds.includes(job.id));
    setFavorites(favJobs);
  }, []);

  return (
    <div className=''>
      <h2 className="text-2xl font-bold mb-4">Favorite Jobs</h2>
      {favorites.length === 0? <p className="text-gray-500">No favorite jobs found.</p>:
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {favorites.map(job => <JobCard key={job.id} job={job} />)}
      </div>
}
    </div>
  );
}