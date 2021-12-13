import React from 'react'
import { getuser } from '../Posts/AuthData';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
   return (

      getuser() ? (
         <Component {...Component} />
      ) : (
         <Navigate to='/login' />
      )


   )
}

export default PrivateRoute