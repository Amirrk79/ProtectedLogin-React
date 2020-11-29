import React , { Component } from 'react';
import { Switch , Route , BrowserRouter as Router , Redirect} from 'react-router-dom';
import Login from './LoginPage.js';
import Admin from './AdminPage.js';
import * as route from './Routes.js';
import ProtectedRoute from './Protect/ProtectedRoute.js';
import UnProtectedRoute from './Protect/unProtectedRoute.js';




export class Links extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <UnProtectedRoute path="/Login" component={Login} />
                    <ProtectedRoute path="/Admin" component={Admin} />
                    <ProtectedRoute path="/" />
                </Switch>
            </Router>
        );
    };
};

