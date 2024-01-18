import React from 'react'
import SideBar from './sidebar'
import { useState } from 'react'

function SidebarContainer() {
  const [sidebarOpen, setSideBarOpen] = useState(false)
  const handleViewSidebar = () => { setSideBarOpen(!sidebarOpen) }
  return (
    <>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </>
  )
}

export default SidebarContainer
