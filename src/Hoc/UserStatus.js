import React from 'react';
import { checkLogin } from '../Services/RoutingServices';

function requireAuthentication(Component) {
	return class Authentication extends React.Component {
		constructor(props) {
			super(props);
			// this.state = {
			// 	isLoggin: checkLogin(),
			// };
			// this.handleChange = this.handleChange.bind(this);
		}

		componentDidMount() {
			if (check) {
				this.handleChange(check);
				this.props.history.push('/');
			} else {
				this.handleChange(check);
				this.props.history.push('/signin');
			}
			// checkLogin();
		}

		render() {
			return <Component />;
		}
	};
}
export default requireAuthentication;
