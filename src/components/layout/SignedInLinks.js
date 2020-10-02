import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/">Create Project</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><button className="btn btn-floating pink lighten-1">АК</button></li>
        </ul>
    )
}

export default SignedInLinks;