import React, { Component } from 'react'
import "./Search-panel.css"



export default class Search_panel extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.value);
        this.setState({
            value: ""
        })
    }


    onChange(event) {
        this.setState({
            value: event.target.value
        })
        
    }
 

    render() {

        

        return (
            <form className="search-form" onSubmit={this.onSubmit}>
                <input type="text" placeholder="type ur city"
                value={this.state.value}
                onChange={this.onChange}/>
                <input type="submit">
                    
                </input>
                
            </form>
        )
    }
}
