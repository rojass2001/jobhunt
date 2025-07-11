import { useState } from 'react';
import JobDetails from './Jobdetails';


export default function JobCard({ job }) {
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'));

  const toggleFavorite = () => {
    let updated;
    if (favorites.includes(job.id)) {
      updated = favorites.filter(id => id !== job.id);
    } else {
      updated = [...favorites, job.id];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="border p-5 rounded">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.location}</p>
      {job.salary && <p>Salary: {job.salary}</p>}
      <div className="flex gap-2 mt-2">
        <button onClick={() => setShowModal(true)} className="bg-blue-500 text-white px-2 py-1 rounded">View Details</button>
        <button onClick={toggleFavorite} className="bg-yellow-500 px-2 py-1 rounded">
          {favorites.includes(job.id) ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>
      {showModal && <JobDetails job={job} onClose={() => setShowModal(false)} />}
    </div>
  );
}