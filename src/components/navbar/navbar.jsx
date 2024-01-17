import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="nav">
      <ul style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>

        <li className="current" style={{ whiteSpace: 'nowrap' }}>
          <NavLink to={"/"} style={{ fontWeight: 'bold'}} > Inicio </NavLink>
        </li>

        <li style={{ whiteSpace: 'nowrap' }}>
          <NavLink to={"/"} style={{ fontWeight: 'bold'}} > Control Parental </NavLink>
        </li>

        <li style={{ whiteSpace: 'nowrap' }}>
          <NavLink to={"/"} style={{ fontWeight: 'bold'}} > Seguridad Personal </NavLink>
        </li>

        <li style={{ whiteSpace: 'nowrap' }}>
          <NavLink to={"/"} style={{ fontWeight: 'bold'}} > FAQ </NavLink>
        </li>

        <li style={{ whiteSpace: 'nowrap' }}>
          <NavLink to={"/"} style={{ fontWeight: 'bold'}} > Contacto </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
