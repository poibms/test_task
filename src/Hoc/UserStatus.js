import React from 'react';
import { AuthContext } from '../Components/Helpers/AuthContext';

function requireAuthentication(Component) {
	return class Authentication extends React.Component {
		// eslint-disable-next-line react/static-property-placement
		static contextType = AuthContext;

		componentDidMount() {
			if (this.context.isLoggin) {
				this.props.history.push('/');
			} else {
				this.props.history.push('/signin');
			}
		}

		render() {
			return <Component />;
		}
	};
}
export default requireAuthentication;
