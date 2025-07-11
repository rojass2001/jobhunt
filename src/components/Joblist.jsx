import { useEffect, useState } from 'react';
import jobsData from '../data/jobs.json';
import JobCard from './Jobscard';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState({ title: '', location: '' });

  useEffect(() => {
    setJobs(jobsData);
  }, []);

  let filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query.title.toLowerCase()) &&
    job.location.toLowerCase().includes(query.location.toLowerCase())
  );


  return (
    <div>
      <div className="flex max-sm:flex-col gap-3 mb-4 px-2">
        <input
          placeholder="Job title"
          className="border p-2"
          value={query.title}
          onChange={e => setQuery({ ...query, title: e.target.value })}
        />
        <input
          placeholder="Location"
          className="border p-2"
          value={query.location}
          onChange={e => setQuery({ ...query, location: e.target.value })}
        />

      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        {filteredJobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}

