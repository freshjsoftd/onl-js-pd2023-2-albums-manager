// import React from 'react'

import {
	Routes,
	Route,
	NavLink,
	Navigate,
	// useRouteMatch,
} from 'react-router-dom';
import UserForm from './UserForm';
import UserAlbums from './UserAlbums';
import UsersList from './UsersList';

function Users() {
	// const { path, url } = useRouteMatch();

	return (
		<>
			<nav>
				<NavLink to='add'>Add</NavLink>
			</nav>
			<hr />
			<Routes>
				<Route path='add/:id' element={<UserForm />} />
				<Route path='add' element={<Navigate to=':id'/>} />
				<Route path=':id' element={<UserAlbums />}/>
				<Route path='/' element={<UsersList />}/>
			</Routes>
		</>
	);
}

export default Users;
