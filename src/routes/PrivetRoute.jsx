import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation, } from 'react-router-dom';


const PrivetRoute = ({children}) => {
    const {user,  loding} = useContext(AuthContext);
    const location = useLocation()
  
    console.log('location', location.pathname)


    if(loding){
      return <span className="loading loading-ring loading-lg"></span>
    }
    {

    }
    // check if user is authenticated or not, if yes, render children, otherwise redirect to login page.
if (user) {
  return children;
}
    return <Navigate state={location.pathname} to = '/login'></Navigate>
};

export default PrivetRoute;