import React , { Component } from "react";
import { Redirect , Route } from 'react-router-dom';


function ProtectedRoute({component: Component , path , ...rest}) {
    const isLoggedIn = localStorage.getItem("LoggedIn");
    return(
        <Route 
        path={path}
        {...rest}
        render ={(props) => {
            return isLoggedIn ?
            <Component {...props} />
            : 
            <Redirect to="/Login" />;
        }}
        />
    )
};


export default ProtectedRoute;