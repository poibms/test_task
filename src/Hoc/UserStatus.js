import React from 'react';
import { connect } from 'react-redux';
import { Routes } from '../Config/Routes';

function requireAuthentication(Component) {
	class Authentication extends React.Component {
		componentDidMount() {
			const { user } = this.props;
			if (user) {
				this.props.history.push(Routes.MainPage);
			} else {
				this.props.history.push(Routes.SignIn);
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
				return Routes.MainPage;
			}

			return Routes.SignIn;
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
