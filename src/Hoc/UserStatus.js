import React from 'react';
import { connect } from 'react-redux';
import { routes } from '../Config/Routes';

function requireAuthentication(Component) {
	class Authentication extends React.Component {
		componentDidMount() {
			const { user } = this.props;
			if (user) {
				this.props.history.push(routes.mainPage);
			} else {
				this.props.history.push(routes.signIn);
			}
		}

		componentDidUpdate(prevProps) {
			const { history } = this.props;
			if (prevProps.user !== this.props.user) {
				history.push(this.getUserState());
			}
		}

		getUserState = () => {
			const { user } = this.props;
			if (user) {
				return routes.mainPage;
			}

			return routes.signIn;
		};

		render() {
			return <Component />;
		}
	}

	return connect((state) => ({
		user: state.user,
	}))(Authentication);
}

export default requireAuthentication;
