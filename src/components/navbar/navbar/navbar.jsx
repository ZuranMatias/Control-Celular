import React from 'react';
import NavbarLink from './navbar_link';

function Navbar({isVisible}) {
  const position = isVisible ? "static" : "sticky"
  return (
    <nav id="nav" className={position}>
      <ul>
      <NavbarLink address={"/"}>Inicio</NavbarLink>
      <NavbarLink address={"/features"}>¿Qué Funciones Tiene?</NavbarLink>
      <NavbarLink address={"/faq"}>¿Preguntas?</NavbarLink>
      <NavbarLink address={"/contacto"}>Contacto</NavbarLink>
      <NavbarLink address={"/privacyPolicy"}>Política de Privacidad</NavbarLink>
      {/* <NavbarLink address={"/pricing"}>Precios</NavbarLink> */}
      </ul>
    </nav>
  );
}

export default Navbar;
