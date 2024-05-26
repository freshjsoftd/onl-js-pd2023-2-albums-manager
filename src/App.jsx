// import { useState } from 'react'
import {
	BrowserRouter as Router,
	NavLink,
	Link,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
// ==============================
import './App.css';
import Albums from './components/albums/Albums';
import Users from './components/users/Users';
// ==============================
import { setActive } from './services/style-service';
import './App.css';
import { Button } from '@mui/material';

function App() {
	// const setActive = ({isActive}) => isActive ? 'selected' : ''
	return (
		<Router>
			<Box sx={{ flexGrow: 1, width: '900px'}}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='open drawer'
							sx={{ mr: 2 }}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							variant='h6'
							noWrap
							component='div'
							fontSize={15}
							sx={{
								flexGrow: 1,
								display: { xs: 'none', sm: 'block' },
							}}
						>
							Albums Manager
						</Typography>
						<Button color='inherit'>Login</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<div className='header'>
				<ul>
					{/* <li>
						<a href='/albums'>Test</a>
					</li> */}
					<li>
						<NavLink to='/albums' className={setActive}>
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
			<Routes>
				<Route path='/'>Home</Route>
				<Route path='/albums/*' element={<Albums />} />
				<Route path='/users/*' element={<Users />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Router>
	);
}

export default App;
