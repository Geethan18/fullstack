
// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import CustomNavbar from "./components/Navbarcus"
import aboutus from "./pages/About"
import Aboutus from "./pages/About"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import EventCard from "./components/cards"
import Timeline from "./components/timeline"

const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Aboutus/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/events',
      element:<EventCard/>
    },{
      path:"/eventdes",
      element:<Timeline/>
    }
  ])
  return(
    <>
    <RouterProvider router={router}>
    </RouterProvider>
    </>
  );
}

export default App
