import { Outlet } from "react-router-dom";
import { Toaster } from 'sonner'
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>  
        <Navbar />
        <Outlet/>
        <Toaster position="top-right" expand={false} closeButton richColors/>
    </>

  )
}

export default MainLayout