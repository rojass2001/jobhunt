// Importing necessary hooks and components
import { useEffect } from 'react';
import jobsData from '../data/jobs.json';         // Sample job data (static JSON file)
import JobCard from './Jobscard';                 // Component to render each job card
import { setjoblists } from '../redux/Jobslice';  // Redux action to set job list
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks for state and dispatch
import { ClipLoader } from "react-spinners";      // Spinner component for loading UI

export default function JobList() {
  const dispatch = useDispatch();

  // Extracting job data from Redux store
  const { alljobs } = useSelector((state) => state.job);

  // useEffect runs once on mount to populate job list in Redux store
  useEffect(() => {
    dispatch(setjoblists(jobsData)); // Dispatching job data to store
  }, []);

  return (
    <div>
      {/* Show loader while job data is empty */}
      {alljobs.length === 0 &&
        <div className="w-full py-20 text-center justify-center">
          <ClipLoader color='blue' size={30} />
        </div>
      }

      {/* Job list grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {/* Mapping over job data and rendering JobCard for each */}
        {alljobs?.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
