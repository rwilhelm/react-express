var React = require('react');
var Layout = require('./Layout.jsx');

var Index = React.createClass({
	displayName: 'Index',

	propTypes: {
		title: React.PropTypes.any
	},

	render: function() {
		return (
			<Layout {...this.props}>
				<h1>{this.props.title}</h1>
			</Layout>
		);
	}
});

module.exports = Index;
