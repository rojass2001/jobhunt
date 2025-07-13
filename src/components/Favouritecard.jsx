import React, { useState } from 'react'
import JobDetails from './Jobdetails';

function Favouritecard({job,handledelete}) {
    const [showModal, setShowModal] = useState(false);
  return (
   <div className="border p-5 rounded" >
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
            onClick={handledelete}
             className="bg-yellow-500 px-2 py-1 rounded"
           >
             Remove
           </button>
         </div>
   
         {/* Show JobDetails modal if showModal is true */}
         {showModal && <JobDetails job={job} onClose={() => setShowModal(false)} />}
       </div>
  )
}

export default Favouritecard
