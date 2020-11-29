import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';


 class Admin extends Component {
    constructor(props) {
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    };

    handleLogOut(e) {
        e.preventDefault();
        localStorage.removeItem("LoggedIn");
        this.props.history.push("/Login");
        
    }

    render() {
        return(
            <div>
                <h1>Welcome to Admin page.</h1>
                <button type="button" onClick={this.handleLogOut}>LogOut</button>
            </div>
        )
    }
}



export default withRouter(Admin);