import React from 'react'
import { NavLink } from 'react-router-dom'

function NavbarLink({address, children}) {
  if (!address) { address = '/' }
  return (
    <li style={{ whiteSpace: 'nowrap' }}>
      <NavLink to={address} style={{ fontWeight: 'bold' }}>{children}</NavLink>
    </li>
  )
}

export default NavbarLink
