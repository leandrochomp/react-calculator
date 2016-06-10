var React = require('react');
var validator = require('validator');

var NumberField = React.createClass({
	//if this line is not here, state will be null, and broks js
	getInitialState: function() {
		return{valueOfInput:"", valid: true}
	},
	onChange: function(e) {
		this.setState({value: e.target.value});
	},
 
	render: function() {
		return(
			<input className="form-control input-lg"
				   type="text"
				   onChange={this.onInput}
				   value={this.state.valueOfInput} />
		);
	}
});

module.exports = NumberField;