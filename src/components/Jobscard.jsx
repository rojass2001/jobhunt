// Importing React's useState hook and the JobDetails modal component
import { useEffect, useState } from 'react';
import JobDetails from './Jobdetails';


export default function JobCard({ job }) {
 const[showModal, setShowModal] = useState(false);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavs(stored.map(job => job.id));
  }, []);

  const handleFavourite = (job) => {
    let favs = JSON.parse(localStorage.getItem('favourites')) || [];

    const exists = favs.find((item) => item.id === job.id);
    if (!exists) {
      favs.push(job);
      setFavs([...favs, job.id]);
      localStorage.setItem('favourites', JSON.stringify(favs));
      alert(`${job.title} successfully added to favourites!`);
    } 
    else {
       const updated=favs.filter((jobs) => jobs.id !== job.id)
       localStorage.setItem('favourites', JSON.stringify(updated));
       setFavs(updated.map(job=>job.id))
       alert(`${job.title} successfully remove from favourites!`)
    }

  };

  
  return (
    <div className="border p-5 rounded">
      {/* Job title */}
      <h3 className="text-xl font-bold">{job?.title}</h3>

      {/* Company name */}
      <p>{job?.company}</p>

      {/* Job location */}
      <p>{job?.location}</p>

      {/* Salary if available */}
      {job?.salary && <p>Salary: ₹{job.salary}</p>}

      {/* Buttons: View Details and Favorite/Unfavorite */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 text-white px-2 py-1 rounded"
        >
          View Details
        </button>

        <button
        onClick={()=> handleFavourite(job)}
          className="bg-yellow-500 px-2 py-1 rounded"
        >
          {favs?.includes(job.id) ? 'unFavourite' : 'Favorite'}
        </button>
        
      </div>

      {/* Show JobDetails modal if showModal is true */}
      {showModal && <JobDetails job={job} onClose={() => setShowModal(false)} />}
    </div>
  );
}
