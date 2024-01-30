import React from 'react'
import SidebarLink from './sidebar_link'

const SideBar = (props) => {
  const sidebarClass = props.isOpen ? 'sidebar open' : 'sidebar'
  return (
    <>
      <div className={sidebarClass}>
        <ul>
          <SidebarLink address={'/'}>Inicio</SidebarLink>
          <SidebarLink address={'/'}>Control Parental</SidebarLink>
          <SidebarLink address={'/'}>Seguridad</SidebarLink>
          <SidebarLink address={'/faq'}>Preguntas</SidebarLink>
          <SidebarLink address={'/contacto'}>Contacto</SidebarLink>
        </ul>
          {/* <div onClick={props.toggleSidebar} className="sidebar-toggle-sticky">
            <img src="./menu.png" alt="mobile menu toggle" style={{ maxWidth: '50%', maxHeight: '40%' }} />
          </div> */}
      </div>

      <div className="sidebar-toggle-container">
        <div onClick={props.toggleSidebar} className="sidebar-toggle-static">
          <img src="./menu.png" alt="mobile menu toggle" style={{ maxWidth: '50%', maxHeight: '40%' }} />
        </div>
      </div>
    </>
  )
}
export default SideBar
