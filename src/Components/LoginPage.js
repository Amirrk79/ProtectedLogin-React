import React from 'react';
import { withRouter , Redirect } from 'react-router-dom';




 class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            error:"",
            isLoggedIn: false,
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };


    handleChanges(e) {
        if (e.target.value === "") {
            this.setState({error : "Inputs Cant be Empty!"});
        } else {
            this.setState({[e.target.name]: e.target.value , error: ""});
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        if(this.state.username === "admin" && this.state.password === "admin") {
            this.setState({isLoggedIn : true} , () => {
                localStorage.setItem('LoggedIn' , this.state.isLoggedIn);
                this.props.history.push("/Admin");
            });
        } else {
            this.setState({error : "Login faild, username or password is incorrect."})
        }
    }

    

    render() {
        return(
            <div>
            <h1>Login</h1>
            <form>
                <label>
                    Username:<input type="text" placeholder="Username" onChange={this.handleChanges} name="username" />
                </label>
                <label>
                    Password:<input type="text" placeholder="Password" onChange={this.handleChanges} name="password" />
                </label>
                <button type="button" onClick={this.handleSubmit}>Login</button>
        <p>{this.state.error}</p>
            </form>
            </div>
        );
    };
};

export default withRouter(Login);