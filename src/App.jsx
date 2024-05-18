// import { useState } from 'react'
import {
	BrowserRouter as Router,
	NavLink,
	Link,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import './App.css';
import Albums from './components/albums/Albums';
import Users from './components/users/Users';

function App() {
	return (
		<Router>
			<div className='header'>
				<ul>
					{/* <li>
						<a href='/albums'>Test</a>
					</li> */}
					<li>
						<NavLink to='/albums' activeClassName='selected'>
							Albums
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/users'
							style={(isActive) => ({
								color: isActive ? 'red' : 'blue',
							})}
						>
							Users
						</NavLink>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
				</ul>
			</div>
			<Switch>
				<Route path='/' exact>
					Home
				</Route>
				<Route path='/albums'>
					<Albums movies='movie' />
				</Route>
				<Route
					path='/users'
					render={(props) => <Users {...props} title='User' />}
				/>
				{/* <Route path='/users' component={Users}/> */}
				<Redirect path='*' to='albums' />
				{/* <Redirect from='*' to='albums'/> */}
				{/* <Route path='*'>
					<Redirect to='albums'/>
				</Route> */}
			</Switch>
		</Router>
	);
}

export default App;
