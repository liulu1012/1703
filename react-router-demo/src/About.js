import React from 'react'

import {Route,Link} from 'react-router-dom'

const Zhang = ()=><h1>zhang</h1>
const Wang = ()=><h1>wang</h1>
const Liu = ()=><h1>liu</h1>
class About extends React.Component{
	render(){
		console.log(this.props)
		let {match} =this.props
		return(                                               
				<div>
					About
					<br />
					<Link to={match.url}>张</Link>
					<Link to={`${match.url}/wang`}>王</Link>
					<Link to={`${match.url}/liu`}>刘</Link>
					<Link to={{
						pathname:'/work/dkjlk',
						state:{from:'/about'}
					}}>跳转</Link>
					<Route path={match.url} exact component={Zhang}/>
					<Route path={`${match.url}/wang`} exact component={Wang}/>
					<Route path={`${match.url}/liu`} exact component={Liu}/>
				</div>
			)
	}
}

export default About