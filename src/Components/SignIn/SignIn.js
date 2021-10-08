import React, { Component } from 'react'
import SignIn_form from '../SignIn-Form/SignIn-form'

import "./SignIn.css"


export default class SignIn extends Component {
    
   
    
    componentDidMount() {
        if(localStorage.getItem("account")) {
            window.location.assign('http://localhost:3000/')
        }
    }

    SignIn(login, email,password) {
        var numbers = /[A-Z\d]/g
 
      if(password.length > 5 && numbers.test(password)) {
          
        console.log(login)
        console.log(email)
        console.log(password)
        var token = login + email + password;
        localStorage.setItem("account",token)
        window.location.assign('http://localhost:3000/')
        
      } else {
          alert("the minimum password length should be 15 characters")
      }
        
    }

    render() {
        
        return (
            <> 
                <div className="wrap">
                    <SignIn_form onSubmit={this.SignIn}/>
                </div>
            </>

            
        )
    }
}
