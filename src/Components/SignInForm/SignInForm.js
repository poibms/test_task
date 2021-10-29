import React, { Component } from 'react';
import './SignInForm.css';

export default class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: '',
			email: '',
			password: '',
		};
		this.onFormInputChange = this.onFormInputChange.bind(this);
		this.onSubmitSignInForm = this.onSubmitSignInForm.bind(this);
	}

	onFormInputChange(event) {
		const evTarget = event.target;
		const evValue = evTarget.value;
		const evName = evTarget.name;
		this.setState({
			[evName]: evValue,
		});
	}

	onSubmitSignInForm(event) {
		event.preventDefault();
		const { login, email, password } = this.state;
		this.props.onSubmit(login, email, password);
	}

	render() {
		return (
			<div>
				<form className="form" onSubmit={this.onSubmitSignInForm}>
					<div className="form_inner">
						<h3>Sign up</h3>

						<input
							type="text"
							name="login"
							placeholder="Username"
							onChange={this.onFormInputChange}
						/>

						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={this.onFormInputChange}
						/>

						<input
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.onFormInputChange}
						/>

						<input type="submit" value="Sign Up" />
					</div>
				</form>
			</div>
		);
	}
}
