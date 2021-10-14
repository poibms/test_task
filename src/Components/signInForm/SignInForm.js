import React, { Component } from 'react';

import './SignIn-form.css';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      email: '',
      password: '',
    };
    this.onLogin = this.onLogin.bind(this);
    this.onEmail = this.onEmail.bind(this);
    this.onPassword = this.onPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLogin(event) {
    this.setState({
      login: event.target.value,
    });
  }

  onEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  onPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // const {onSubmit} = this.props
    const { login, email, password } = this.state;
    this.props.onSubmit(login, email, password);
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form_inner">
            <h3>Sign up</h3>

            <input
              type="text"
              name="login"
              placeholder="Username"
              onChange={this.onLogin}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.onEmail}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.onPassword}
            />

            <input type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}
