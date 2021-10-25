import React from 'react';

export default function UserStatus(Component) {
	return class extends React.Component {
		componentWillReceiveProps(nextProps) {
			console.log('perv', this.props);
			console.log('perv', nextProps);
		}

		render() {
			return <Component {...this.props} />;
		}
	};
}
