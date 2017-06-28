import React from 'react'

import {BrowserRouter,Route,NavLink,Redirect,Switch} from 'react-router-dom'

import Home from './Home.js'
import About from './About.js'
import Work from './Work.js'
import Footer from './Footer.js'

let NotFound = ()=><div>您访问的地址不存在</div>
class App extends React.Component{
	render(){
		// let user = true
		return(
				<BrowserRouter>
					<div>
						<h1>导航</h1>
						<NavLink to='/' exact>首页</NavLink>
						<NavLink to={{
							pathname:'/about',
							// search:'?sort=name',
							// hash:'#the-hash',
							state:{from:'/'}
						}}>关于</NavLink>
						<NavLink to='/work/'>工作</NavLink>
						<Switch>
							<Route path='/' exact component={Home}/>
							<Route path='/about' component={About}/>
							<Route path='/work/:name' component={Work}/>
							{/*<Route pate='/work/:name' render={props=>(user?<About {...props}/>:<Redirect to='404'/>)}/>
														<Route path='/work/:name' component={user?Work:NotFound}/>*/}
							{/*<Route path='*' component={NotFound}/>*/}
							{/*<Redirect to='/about' from='aboutme'/>*/}
							<Route path='/404' component={NotFound}	/>
							<Redirect to='/404' from='*' />						
						</Switch>
						<Footer />
					</div>
				</BrowserRouter>
		)
	}
}

export default App