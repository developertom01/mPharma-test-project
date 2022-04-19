import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import DataPersistent from '../lib/utils/data_persistent'

interface Props {
    element:React.ReactNode
}

const PublicRoutes = ({element:Element}:Props) => {
    return DataPersistent.authToken? (
        //Navigate to homepage if user is logged in
        <Navigate to="/"/>
        ):(
            <Route element={Element}/>
        )
}

export default PublicRoutes
