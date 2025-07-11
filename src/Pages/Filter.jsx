import React from 'react'
import Searchsection from '../components/Searchsection' // Optional: can be used above the results for quick filtering
import { useSelector } from 'react-redux' // To access state from Redux store
import JobCard from '../components/Jobscard' // Reusable job card component

function Filter() {
  // Get filtered jobs from Redux store
  const { filterjobs } = useSelector((state) => state.job)

  return (
    <div>
      {/* Optionally add <Searchsection /> here for persistent filter UI */}
      {/* <Searchsection /> */}

      {/* Show a message if no matching jobs are found */}
      {filterjobs.length === 0 && (
        <p className="text-gray-500 max-sm:text-center">No search found.</p>
      )}

      {/* Display filtered job cards in a responsive grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {filterjobs?.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

export default Filter
