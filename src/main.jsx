import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './responsive.css'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom"; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Mainpage from './Mainpage.jsx';
import Aboutus from './About/Aboutus.jsx';
import Banner from './Banner.jsx';
import Textcounter from './Textcounter.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage/>,
    children : [
      {
        path :"/",
        element : <Banner/>
      } 
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
