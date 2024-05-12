// import React from 'react'

import { NavLink, useRouteMatch } from "react-router-dom"

function Users() {

    const {path, url} = useRouteMatch()


  return (
    <>
        <nav>
            <NavLink to={`${url}/add`}>
                Add
            </NavLink>
        </nav>
    </>
  )
}

export default Users