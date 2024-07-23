import Card from "./Card"
import CardButton from "./CardButton"


const HomeCards = () => {
  return (
    <>
    {/* <!-- Developers and Employers --> */}
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
         <Card bg="bg-gray-100">
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mt-2 mb-4">
              Browse our React jobs and start your career today
            </p>
            <CardButton href="/jobs" textColor="text-white" buttonText="Browse Jobs" bgColor="bg-gray-500"/>
    
         </Card>

         <Card bg="bg-gray-400" textColor="text-white">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mt-2 mb-4">
              List your job to find the perfect developer for the role
            </p>

            <CardButton textColor="white" bgColor="bg-blue-700" buttonText="Apply Job" href="/add-job"/>
         
         </Card>

        </div>
      </div>
    </section>
    </>

  )
}

export default HomeCards