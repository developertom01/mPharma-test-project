import React from 'react'
import { Route, useLocation,Navigate } from 'react-router-dom'
import DataPersistent from '../lib/utils/data_persistent'

interface Props {
    element:React.ReactNode
}
const AuthenticatedRoutes = ({element:Element}:Props) => {
    const pathname=useLocation()
    return DataPersistent.authToken? (
        
        <Route  element={Element}/>
    ):(
        //Navigate to login page if use is not logged in
        <Navigate to={`/login/?redirectTo=${pathname}`} />
    )
}

export default AuthenticatedRoutes
