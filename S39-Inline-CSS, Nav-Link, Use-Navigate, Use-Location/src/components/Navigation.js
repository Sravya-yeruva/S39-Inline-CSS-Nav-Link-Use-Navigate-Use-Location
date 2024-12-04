import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink to="/">Login Page</NavLink>
        <NavLink to="/SignUp">Sign Up</NavLink>
        <NavLink to="/HomePage">Home Page</NavLink>
      </nav>
    </div>
  )
}

export default Navigation
