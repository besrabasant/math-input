/**
 * An autogenerated component that renders the NEQ iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');
const PropTypes = require('prop-types');

const Neq = React.createClass({
    propTypes: {
        color: PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path fill="none" d="M12 12h24v24H12z"/><path d="M19 33l10-18M16 21h17M16 27h17" stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g></svg>;
    },
});

module.exports = Neq;
