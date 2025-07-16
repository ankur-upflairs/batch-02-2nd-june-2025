import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoutes({children}) {    
    let token = localStorage.getItem('token')
    if(token){
        return <>{children}</>
    }
    else{
        return <Navigate to={'/login'} />
    }
  
}

export default ProtectedRoutes