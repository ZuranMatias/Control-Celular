import React from 'react'
import { NavLink } from 'react-router-dom'

function SidebarLink({address, children}) {
    if (!address) {address = "/"}

  return (
    <li style={{ whiteSpace: 'nowrap' }} >
        <NavLink className='sidebar-link' to={address} > {children} </NavLink>
    </li>
  )
}

export default SidebarLink
