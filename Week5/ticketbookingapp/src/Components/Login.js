import React, { Component } from "react";
import Guest from "./Guest";
import User from "./User";

class Login extends Component {

    constructor() {
        super();

        this.state = {
            isLoggedIn: false
        };
    }

    login = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    logout = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {

        if (this.state.isLoggedIn) {

            return (
                <div>
                    <User />
                    <button onClick={this.logout}>Logout</button>
                </div>
            );

        } else {

            return (
                <div>
                    <Guest />
                    <button onClick={this.login}>Login</button>
                </div>
            );

        }

    }

}

export default Login;