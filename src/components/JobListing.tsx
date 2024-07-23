import { useState } from "react";
import {FaLocationDot} from "react-icons/fa6"
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: Company;
}

interface Company {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
}

interface Props {
    job: Job;
}

const JobListing = ({job}: Props) => {
  const [showFull, setShowFull] = useState(false);

  const description = (showFull) ? job.description : job.description.substring(0,90) + "...";

  const showMoreDescription = ()=> { 

    setShowFull((prevState) => !prevState);

  }





  return (
    <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{job.type}</div>
        <h3 className="text-xl font-bold">{job.title}</h3>
      </div>

      <div className="mb-5">
        {description}
        <button className="text-gray-400" onClick={showMoreDescription} >{showFull ? "Less": "More"}</button>



      </div>



      <h3 className="text-blue-500 mb-2">{job.salary}</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <FaLocationDot className="inline text-lg mb-1 mr-1"/>
          {job.location}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
         Read More
        </Link>
      </div>
    </div>
  </div>
  )
}

export default JobListing