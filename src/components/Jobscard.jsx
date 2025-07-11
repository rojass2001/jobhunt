// Importing React's useState hook and the JobDetails modal component
import { useState } from 'react';
import JobDetails from './Jobdetails';

export default function JobCard({ job }) {
  // State to control visibility of the JobDetails modal
  const [showModal, setShowModal] = useState(false);

  // State to store list of favorite job IDs from localStorage
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites') || '[]')
  );

  // Function to add or remove a job from favorites
  const toggleFavorite = () => {
    let updated;

    // If job is already a favorite, remove it
    if (favorites.includes(job.id)) {
      updated = favorites.filter(id => id !== job.id);
    } else {
      // If not, add it
      updated = [...favorites, job.id];
    }

    // Update local state and persist in localStorage
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className="border p-5 rounded">
      {/* Job title */}
      <h3 className="text-xl font-bold">{job.title}</h3>

      {/* Company name */}
      <p>{job.company}</p>

      {/* Job location */}
      <p>{job.location}</p>

      {/* Salary if available */}
      {job.salary && <p>Salary: ₹{job.salary}</p>}

      {/* Buttons: View Details and Favorite/Unfavorite */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          View Details
        </button>

        <button
          onClick={toggleFavorite}
          className="bg-yellow-500 px-2 py-1 rounded"
        >
          {/* Toggle text based on favorite status */}
          {favorites.includes(job.id) ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>

      {/* Show JobDetails modal if showModal is true */}
      {showModal && <JobDetails job={job} onClose={() => setShowModal(false)} />}
    </div>
  );
}
