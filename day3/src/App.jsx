
// import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Aboutus from "./pages/About"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import EventCard from "./components/cards"
import Timeline from "./components/timeline"
import Eventss from "./components/event"
import PrivateEvents from "./pages/privateevents"
import Publicevents from "./pages/publicevents"
import Homepage from "./pages/home"
import Adminpages from "./pages/adminpage"
import Adminprofile from "./components/adminprofile"
import Alleventcard from "./components/adminevent"
import Gallery from "./components/gallery"
import Table from "./pages/table"
import Menupage from "./pages/menupage"
import Themes from "./pages/theme"
import Venue from "./pages/venue"
import Availableevents from "./pages/availableevents"

const App=()=>{
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
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
    },{
      path:'/event',
      element:<Eventss/>
    },{
      path:'/privateevents',
      element:<PrivateEvents/>
    },{
      path:'/publicevents',
      element:<Publicevents/>
    },{
      path:'/home',
      element:<Homepage/>
    },{
      path:'/admin',
      element:<Adminpages/>
    },{
      path:'/adminprofile',
      element:<Adminprofile/>
    },{
      path:'/allevents',
      element:<Alleventcard/>
    },{
      path:'/gallery',
      element:<Gallery/>
    },{
      path:'/table',
      element:<Table/>
    },{
      path:'/menu',
      element:<Menupage/>
    },{
      path:'/themes',
      element:<Themes/>
    },{
      path:'/venues',
      element:<Venue/>
    },{
      path:'/availableevents',
      element:<Availableevents/>
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
