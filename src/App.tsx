import { Route, createBrowserRouter,createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, {jobLoader} from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import { addJob,deleteJob,editJob } from "./services/jobservice";



const App = () => {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
       <Route index element= {<HomePage/>}  />
       <Route path="/jobs" element={<JobsPage/>}/>
       <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
       <Route path="/edit-job/:id" element={<EditJobPage editJobSubmit={editJob}/>} loader={jobLoader}/>
       <Route path="/jobs/:id" element={<JobPage  deleteJob={deleteJob}/>} loader={jobLoader}/>
       <Route path="*" element={<NotFoundPage/>}/>
  
    </Route>
    
  )
  
  )

  return <RouterProvider router={router}/>
};

export default App;
