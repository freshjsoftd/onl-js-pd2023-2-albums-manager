// import React from 'react'

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AlbumPhotos from './AlbumPhotos';
import AlbumsList from './AlbumsList';

function Albums() {

    const {path} = useRouteMatch();
    // console.log(match)

	return (
		<>
			<Switch>
				<Route path={`${path}/:id`}>
					<AlbumPhotos />
				</Route>
				<Route path={`${path}`}>
					<AlbumsList />
				</Route>
			</Switch>
		</>
	);
}

export default Albums;
