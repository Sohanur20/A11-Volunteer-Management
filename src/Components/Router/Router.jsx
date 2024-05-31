import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Error from "../Pages/ErrorPage/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddVolunteer from "../AddVolunteer/AddVolunteer";
import ShowPost from "../showPost/ShowPost";
import PostDetails from "../PostDetails/PostDetails";
import ManegePost from "../Pages/ManegePost/ManegePost";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import RequestVolunteer from "../RequestVolunteer/RequestVolunteer";
import VolunteerPageData from "../VolunteerPageData/VolunteerPageData";


const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement :<Error></Error> ,
      children : [
        {
            path : '/',
            element : <Home></Home>,
          
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/register',
          element : <Register></Register>
        },
        // form add
        {
          path : '/addVolunterPost',
          element :<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute> 
        },
        // show post 
        {
          path : '/viewPost',
          element : <ShowPost></ShowPost>
        },
        // show post details 
        {
          path : '/viewPost/:id',
          element : <PrivateRoute><PostDetails></PostDetails></PrivateRoute> ,
          loader : ({params}) => fetch(`${import.meta.env.VITE_API_URL}/addVolunteer/${params.id}`)
        },

        // manage Post 
        {
          path : '/managePost',
          element :<PrivateRoute><ManegePost></ManegePost></PrivateRoute> 
        },
        // update 
        {
          path : '/updateVolunteer/:id',
          element : <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute> ,
          loader :({params}) => fetch(`${import.meta.env.VITE_API_URL}/addVolunteer/${params.id}`)
        },
        // requested
       {
        path : '/requestVolunteer',
        element :<RequestVolunteer></RequestVolunteer>
       },
       {
        path : '/volunteerPage',
        element : <VolunteerPageData></VolunteerPageData>
       }


      ]
    },
  ]);

export default Router;