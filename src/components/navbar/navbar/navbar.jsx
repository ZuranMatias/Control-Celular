import React from 'react';
import NavbarLink from './navbar_link';

function Navbar({isVisible}) {
  const position = isVisible ? "static" : "sticky"
  return (
    <nav id="nav" className={position}>
      <ul>
      <NavbarLink>Inicio</NavbarLink>
      <NavbarLink>Control Parental</NavbarLink>
      <NavbarLink>Seguridad Personal</NavbarLink>
      <NavbarLink>Faq</NavbarLink>
      <NavbarLink>Contacto</NavbarLink>
      </ul>
    </nav>
  );
}

export default Navbar;
