import React from 'react'

import Navbar from './navbar/navbar'
import { useInView } from 'react-intersection-observer'
import SidebarContainer from './sidebar/sidebar_container'

function NavbarContainer() {
    const { ref, inView } = useInView({ threshold: 1 })
  return (
    <>
    <SidebarContainer/>
    <div ref={ref}> <Navbar isVisible={inView} /> </div>
    </>
  )
}

export default NavbarContainer
