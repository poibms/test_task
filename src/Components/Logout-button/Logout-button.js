import React, { Component } from 'react'
import "./Logout-button.css"

export default class Logout_button extends Component {
    
    LogOut() {
        if(localStorage.getItem("account")){
            localStorage.removeItem('account');
            window.location.assign('http://localhost:3000/signin')
        }
    }
    
    render() {
        return (
            <div>
                <button className="login-button" onClick={this.LogOut}>Log Out</button>
            </div>
        )
    }
}
