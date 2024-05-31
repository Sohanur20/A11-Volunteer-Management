/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Pages/Loader/Loader";




const PrivateRoute = ({children}) => {

    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

   
    if (loading) {
        return <Loader></Loader>
        // loader
    }
    
    if (user) {
        return children ;
    }
    
        return <Navigate to='/login' state={location.pathname} replace></Navigate>
    
};

export default PrivateRoute;
