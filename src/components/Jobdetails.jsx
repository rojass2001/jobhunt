export default function JobDetails({ job, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p className="mt-4">{job.description}</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-3 py-1 rounded">Close</button>
      </div>
    </div>
  );
}