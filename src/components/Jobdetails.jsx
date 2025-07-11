// This is a React component that displays detailed information about a job in a modal overlay
export default function JobDetails({ job, onClose }) {
  return (
    // Full-screen overlay with dark background
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      
      {/* Modal box */}
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        
        {/* Job Title */}
        <h2 className="text-2xl font-bold mb-2">{job.title}</h2>

        {/* Company Name */}
        <p><strong>Company:</strong> {job.company}</p>

        {/* Job Location */}
        <p><strong>Location:</strong> {job.location}</p>

        {/* Job Salary */}
        <p><strong>Salary:</strong> {job.salary}</p>

        {/* Job Description */}
        <p className="mt-4">{job.description}</p>

        {/* Close button to dismiss the modal */}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
