import React from 'react'
import { useEffect } from 'react'

import { PriceCardTextList } from '../components/pricingCards'

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center pricing-bg" style={{minHeight: "85vh"}}>

        <h1 style={{paddingTop: "15vh"}} className='price-title'>Precios</h1>

        <img src='./Images/Home/Slides/EliteBox2.png' className='price-box-image'/>

        <div className='d-flex flex-row flex-wrap justify-content-center align-items-around' style={{width: "70vw", jus: "center"}}>
          <div className='row-column flex-wrap justify-content-around'>
            <PriceCardTextList/>
          </div>
        </div>
        <p className="font-weight-light text-danger h4" style={{textAlign: "center", padding: "2vh"}}> <strong>El servicio de instalación remota es de usd $50. <br/> La licencia de 1 año y 182 días ya tiene instalación remota bonificada.</strong></p>
      </div>
    </>
  )
}

export default Pricing
