import React from 'react'
import { useEffect } from 'react'

import PricingCard from '../components/pricingCards'
import { pricesList } from './prices/pricesList'

function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let priceCardList = []
  for (let i = 0; i < pricesList.length; i++) {
    priceCardList.push(
      <PricingCard
        key={`pricingCard${i}`}
        title={pricesList[i].title}
        children={pricesList[i].children}
        price={pricesList[i].price}
        whatsappMessage={pricesList[i].whatsappMessage}
      />,
    )
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center pricing-bg" style={{minHeight: "85vh"}}>
        <h1 style={{paddingTop: "15vh"}}>Precios</h1>
        <div className='d-flex flex-row flex-wrap justify-content-center align-items-around' style={{width: "70vw", jus: "center"}}>
          {priceCardList}
        </div>
      </div>
    </>
  )
}

export default Pricing
