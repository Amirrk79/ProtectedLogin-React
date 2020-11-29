import React , { Component } from 'react';
import { Switch , BrowserRouter as Router } from 'react-router-dom';
import Login from './LoginPage.js';
import Admin from './AdminPage.js';
import ProtectedRoute from './Protect/ProtectedRoute.js';
import UnProtectedRoute from './Protect/unProtectedRoute.js';
import { LoginPage , AdminPage} from './Routes';





export class Links extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <UnProtectedRoute path={LoginPage} component={Login} />
                    <ProtectedRoute path={AdminPage} component={Admin} />
                    <ProtectedRoute path="/" />
                </Switch>
            </Router>
        );
    };
};

