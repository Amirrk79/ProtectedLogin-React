import React from "react";
import { Route } from 'react-router-dom';


const { Redirect } = require("react-router-dom");


function UnProtectedRoute({component: Component , path , ...rest }) {
    const isLoggedIn = JSON.parse(localStorage.getItem("LoggedIn"));
    return(
        <Route 
        path={path}
        {...rest}
        render={(props) => {
           return isLoggedIn ?
            <Redirect to="/Admin" /> :
            <Component {...props} />
        }}
        />
    )
}

export default UnProtectedRoute;