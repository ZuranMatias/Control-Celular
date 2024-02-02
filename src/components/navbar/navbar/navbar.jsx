import React from 'react';
import NavbarLink from './navbar_link';

function Navbar({isVisible}) {
  const position = isVisible ? "static" : "sticky"
  return (
    <nav id="nav" className={position}>
      <ul>
      <NavbarLink address={"/"}>Inicio</NavbarLink>
      <NavbarLink>Control Parental</NavbarLink>
      <NavbarLink address={"/features"}>¿Qué Funciones Tiene?</NavbarLink>
      <NavbarLink address={"/faq"}>¿Preguntas?</NavbarLink>
      <NavbarLink address={"/contacto"}>Contacto</NavbarLink>
      </ul>
    </nav>
  );
}

export default Navbar;
