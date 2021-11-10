import React, { useState } from 'react';
import './SignInForm.css';

const SignInForm = (props) => {
	const [login, setLogin] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitSignInForm = (event) => {
		event.preventDefault();
		props.onSubmit(login, email, password);
	};

	return (
		<div>
			<form className="form" onSubmit={onSubmitSignInForm}>
				<div className="form_inner">
					<h3>Sign up</h3>

					<input
						type="text"
						name="login"
						placeholder="Username"
						onChange={(event) => {
							setLogin(event.target.value);
						}}
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						onChange={(event) => {
							setEmail(event.target.value);
						}}
					/>

					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={(event) => {
							setPassword(event.target.value);
						}}
					/>

					<input type="submit" value="Sign Up" />
				</div>
			</form>
		</div>
	);
};
export default SignInForm;
