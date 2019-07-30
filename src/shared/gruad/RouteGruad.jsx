import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouteGruad = ({component: Component, path}) => {
    return (
        <Route 
            to={path}
            render={(routesProps) => {
            if(localStorage.getItem('token')) {
                return <Component {...routesProps} />
            }
            return <Redirect to="/signin" />
            }}
        />
    )
}

export default RouteGruad
