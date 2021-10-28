import React from 'react';
import { checkLogin } from '../Services/RoutingServices';

function requireAuthentication(Component) {
	return class Authentication extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isLoggin: checkLogin(),
			};
			this.handleChange = this.handleChange.bind(this);
		}

		componentDidMount() {
			console.log(this.props);
			const check = checkLogin();
			if (check) {
				this.handleChange(check);
				this.props.history.push('/');
			} else {
				this.handleChange(check);
				this.props.history.push('/signin');
			}
			// checkLogin();
		}

		componentWillUnmount() {
			// if (prevState !== this.props.is) {
			// 	prevProps.history.push('/');
			// } else {
			// 	prevProps.history.push('/signin');
			// }
			// if (checkLogin()) {
			// 	this.props.history.push('/');
			// } else {
			// 	prevProps.history.push('/signin');
			// }
			if (checkLogin()) {
				this.props.history.push('/');
			} else {
				this.props.history.push('/signin');
			}
			// console.log(prevProps);
		}

		handleChange(newState) {
			this.setState({
				isLoggin: newState,
			});
		}

		render() {
			return <Component />;
		}
	};
}
export default requireAuthentication;
