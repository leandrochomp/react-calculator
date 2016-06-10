var React = require('react');

var NumberField = require('./NumberField.jsx');
var ResultField = require('./ResultField.jsx');

var LeadCapture = React.createClass({
	getInitialState: function() {
    	return {resultValue: ""}
  	},
  	onCalc: function(operator) {
  		console.log(operator);
  	},
	clearFields: function() {
		this.refs.num1.clear();
		this.refs.num2.clear();
		this.setState({resultCalc: ""});
	},
	render: function() {
		return(
			<div className="container">
				<div className="col-sm-12"> 
					<div className="panel panel-default"> 
						<div className="panel-body">

						<div class="row">
    						<div class="col-md-2 col-md-offset-5">
								<h2> SIMPLE CALCULATOR </h2>
    						</div>
						</div>	
						
							<div className="row"> 
								<div className="col-sm-6">
									<NumberField type="Val1" ref="num1" />
								</div>

								<div className="col-sm-6">
									<NumberField type="Val2" ref="num2" />
								</div>	
							</div>

							<div className="row">
								<br /> 
							</div>			

							<div className="row"> 
								<div className="col-sm-3">
									<button type="button" className="btn btn-primary btn-lg" onClick={() => this.onCalc("add")}> + Add </button>
								</div>

								<div className="col-sm-3"> 
									<button type="button" className="btn btn-primary btn-lg" onClick={() => this.onCalc("sub")}> - Subtract </button> 
								</div>

								<div className="col-sm-3"> 
									<button type="button" className="btn btn-primary btn-lg" onClick={() => this.onCalc("div")}> / Divide </button> 
								</div>

								<div className="col-sm-3"> 
									<button type="button" className="btn btn-primary btn-lg" onClick={() => this.onCalc("mult")}> * Multiply </button> 
								</div>
							</div>	

							<div className="row">
								<br /> 
							</div>

							<div className="row"> 
								<ResultField  resultValue={this.state.resultCalc} />
								<div className="col-sm-3"> 
									<button type="button" style={{width: "100%"}} className="btn btn-danger btn-lg" onClick={this.clearFields}> Clear </button>
								</div>
							</div>			
						</div>
					</div>
				</div>
			</div>	
		);
	}
});

module.exports = LeadCapture;