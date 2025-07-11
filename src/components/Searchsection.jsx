import React, { useState } from 'react'
import { searchjobslocation, searchjobstitle, pricefilter } from '../redux/Jobslice' // Redux actions
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom' // For navigation after filtering

function Searchsection() {
  // Local state for job title and location inputs
  const [location, setlocation] = useState()
  const [jobtitle, setjobtitle] = useState()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Handle location input change and dispatch location filter
  function locationsearch(e) {
    setlocation(e.target.value) // Update input state
    dispatch(searchjobslocation(e.target.value)) // Dispatch filter action with new value
    navigate('/filter') // Navigate to filter result page
  }

  // Handle job title input change and dispatch job title filter
  function jobtitlesearch(e) {
    setjobtitle(e.target.value)
    dispatch(searchjobstitle(e.target.value))
    navigate('/filter')
  }

  // Handle salary filter buttons (low to high / high to low)
  const pricefilters = (type) => {
    dispatch(pricefilter(type)) // Dispatch sort type
    navigate('/filter')
  }

  return (
    <div>
      {/* Search bar section with responsive layout */}
      <div className="flex max-sm:flex-col gap-3 mb-4 px-2">
        
        {/* Job title input */}
        <input
          placeholder="Job title"
          className="border p-2"
          value={jobtitle}
          onChange={jobtitlesearch}
        />

        {/* Location input */}
        <input
          placeholder="Location"
          className="border p-2"
          value={location}
          onChange={locationsearch}
        />

        {/* Salary sorting buttons */}
        <div className="w-full max-sm:justify-center text-white font-semi-bold flex gap-2 items-center">
          <button onClick={() => pricefilters("lowtohigh")} className="p-1.5 bg-blue-500">
            Salary Low to high
          </button>
          <button onClick={() => pricefilters("hightolow")} className="p-1.5 text-black bg-yellow-500">
            Salary high to low
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchsection
