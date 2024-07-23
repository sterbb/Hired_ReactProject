/* eslint-disable @typescript-eslint/no-unused-vars */

import JobListing from "./JobListing"
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

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
  isHome?: boolean;
  job?: Job;
}

const JobListings = ({isHome=false}:Props) => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchJobs = async() => {
      const apiUrl = isHome ? '/api/jobs?_limit=3': '/api/jobs'
      try {
        const res = await fetch(apiUrl); 
        const data = await res.json();
        setJobs(data);

      } catch (error) {
        console.log('Error', error)
      } finally{
        setLoading(false);
      }

  
    }

    fetchJobs();
  }, [])

  return (
    
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>
 
        {loading? 
        (<Spinner loading={loading}/>):
        (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job:Job) =>  (
            <JobListing key={job.id} job={job} />))}
          </div>
        )}

    </div>
  </section>
    
  )
}

export default JobListings