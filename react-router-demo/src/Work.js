import React from 'react'
class Work extends React.Component{
	handleBack(){
		// console.log(this.props.location.state)
		// this.props.history.push(this.props.location.state.from)
		this.props.history.goBack()
	}
	render(){
		console.log(this.props)
		return(
				<div>
					Work
					 {this.props.match.params.name}
					<button onClick={this.handleBack.bind(this)}>返回来的地方</button>
				</div>
			)
	}
}

export default Work