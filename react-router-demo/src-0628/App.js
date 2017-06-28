import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Work from './Work'	
import Home from './Home'
import About from './About'	
		// let Work = ()=><h1>work</h1>
		// let Home = ()=><h1>home</h1>
		// let About = ()=><h1>about</h1>

class App extends React.Component{
	render(){

		return(
			<BrowserRouter>
				<div>
					<h1>hello world</h1>
					<Link to='/'>首页</Link>
					<Link to='/work'>工作</Link>
					<Link to='/about'>关于</Link>
					<Route path='/' exact component={Home} />
					<Route path='/work' component={Work} />
					<Route path='/about' component={About} />
				</div>
			</BrowserRouter>
		)
	}
}

export default App