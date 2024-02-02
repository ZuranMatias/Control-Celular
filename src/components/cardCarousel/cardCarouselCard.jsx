import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function CardCarouselCard({ children, icon, address }) {
  if (!address) { address = '/features' }
  return (
    <>
      <NavLink to={address} style={{ textDecoration: 'none' }}>
        <div className="carousel-card">
          <FontAwesomeIcon size="4x" icon={icon} style={{ margin: '2vw' }} />
          {children}
        </div>
      </NavLink>
    </>
  )
}

export default CardCarouselCard
