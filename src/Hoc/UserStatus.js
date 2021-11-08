import React from 'react';
import { connect } from 'react-redux';
import { AuthContext } from '../Components/Helpers/AuthContext';
import { mainPage, signIn } from '../Config/Routes';

function requireAuthentication(Component) {
	class Authentication extends React.Component {
		// eslint-disable-next-line react/static-property-placement
		static contextType = AuthContext;

		componentDidMount() {
			const { user } = this.props;
			if (user) {
				this.props.history.push(mainPage);
			} else {
				this.props.history.push(signIn);
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
				return mainPage;
			}

			return signIn;
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
