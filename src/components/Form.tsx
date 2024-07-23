import React, { ChangeEvent, useState } from "react";
import { useNavigate} from "react-router-dom";

interface Props{
    transaction:string;
    JobSubmit: any;
    job?:any
}

const Form = ({JobSubmit, transaction, job}: Props) => {
    
  const navigate = useNavigate();

  const initialFormValues = job ? {
    id: job.id,
    title:job.title,
    type: job.type,
    description: job.description,
    location: job.location,
    salary: job.salary,
    company: {
        name: job.company.name,
        description: job.company.description,
        contactEmail: job.company.contactEmail,
        contactPhone: job.company.contactPhone,
    }
  }:
  {
    title: "",
    type: "Full-Time",
    description: "",
    location: "",
    salary: "Under $50K",
    company: {
      name: "",
      description: "",
      contactEmail: "",
      contactPhone: "",
    },
  }

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormValues((formValues) => ({ ...formValues, [name]: value }));
  };
  const handleCompanyChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormValues((formValues) => ({
      ...formValues,
      company: {
        ...formValues.company,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    JobSubmit(formValues);
    
    const url = transaction == 'Add' ? "/jobs": `/jobs/${job.id}`;
    return navigate(url);
  };
  return (
    <>
      <section className="bg-indigo-50 pt-16">
        <div className="container m-auto max-w-2xl py-24">
          <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <form onSubmit={handleSubmit}>
              <h2 className="text-3xl text-center font-semibold mb-6">
                {transaction == 'Add'? "Add Job": "Edit Job"}
              </h2>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Job Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={formValues.type}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Job Listing Name
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="eg. Beautiful Apartment In Miami"
                  required
                  value={formValues.title}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="Add any job duties, expectations, requirements, etc"
                  value={formValues.description}
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Salary
                </label>
                <select
                  id="salary"
                  name="salary"
                  className="border rounded w-full py-2 px-3"
                  required
                  value={formValues.salary}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K - 60K">$50K - $60K</option>
                  <option value="$60K - 70K">$60K - $70K</option>
                  <option value="$70K - 80K">$70K - $80K</option>
                  <option value="$80K - 90K">$80K - $90K</option>
                  <option value="$90K - 100K">$90K - $100K</option>
                  <option value="$100K - 125K">$100K - $125K</option>
                  <option value="$125K - 150K">$125K - $150K</option>
                  <option value="$150K - 175K">$150K - $175K</option>
                  <option value="$175K - 200K">$175K - $200K</option>
                  <option value="Over $200K">Over $200K</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder="Company Location"
                  required
                  value={formValues.location}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <h3 className="text-2xl mb-5">Company Info</h3>

              <div className="mb-4">
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="name"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Company Name"
                  value={formValues.company.name}
                  onChange={(e) => handleCompanyChange(e)}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="company_description"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Company Description
                </label>
                <textarea
                  id="company_description"
                  name="description"
                  className="border rounded w-full py-2 px-3"
                  rows="4"
                  placeholder="What does your company do?"
                  value={formValues.company.description}
                  onChange={(e) => handleCompanyChange(e)}
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="contactEmail"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Email
                </label>
                <input
                  type="email"
                  id="contact_email"
                  name="contactEmail"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Email address for applicants"
                  required
                  value={formValues.company.contactEmail}
                  onChange={(e) => handleCompanyChange(e)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="contactPhone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Contact Phone
                </label>
                <input
                  type="tel"
                  id="contact_phone"
                  name="contactPhone"
                  className="border rounded w-full py-2 px-3"
                  placeholder="Optional phone for applicants"
                  value={formValues.company.contactPhone}
                  onChange={(e) => handleCompanyChange(e)}
                />
              </div>

              <div>
                <button
                  className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                {transaction == 'Add'? "Add Job": "Edit Job"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
