import React, { Component } from 'react'
import "./Header.css";


import Logout_button from '../Logout-button/Logout-button';


export default class Header extends Component {


    render() {
        return (
            <div className="header">
                <h1>Weather App</h1>
                <Logout_button/>
            </div>
        )
    }
}
