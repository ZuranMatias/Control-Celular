import React from 'react'
import { addTextBeforePhone } from '../pages/contact/contactUrls';
import { pricesList } from '../pages/prices/pricesList';

const defaultButton = " btn btn-lg btn-block btn-success "

import Swal from 'sweetalert2'

function alertaCompra(link) {
  Swal.fire({
    title: "Antes de continuar",
    text: "¿Puede usted conseguir acceso al teléfono que quiere monitorear?",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Puedo conseguir acceso",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      alertaInstalacionRemota(link)
    }
  });
}

function alertaInstalacionRemota(link) {
  Swal.fire({
    title: "¿Le gustaría adquirir el servicio de instalación remota?",
    text: "Instalamos el Programa por usted a Distancia, usted solo debe tener el celular en sus manos por unos minutos. Precio de 50 USD.",
    footer: "<strong style='color: red;'>Servicio ya bonificado para licencias de 182 días o un año.</strong>",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí",
    cancelButtonText: "No"
  }).then((result) => {

    if (result.isConfirmed) {
      const newLink = addTextBeforePhone(link, " Me gustaría también el servicio de instalación remota.")
      window.location.href = newLink;
    } else if (!result.isConfirmed) {
      window.location.href = link;
    }

  });
}

export function PricingCard({title, children, whatsappMessage, buttonClassName, price}) {

  !buttonClassName ? buttonClassName = defaultButton : buttonClassName += defaultButton 
  !title ? title = "title" : ""
  !children ? children = "" : ""
  
return (
  <div className = "card box-shadow pricing-card">
        <div className = "card-header">
          <h4 className = "my-0 font-weight-normal">{title}</h4>
        </div>
        <div className = "card-body d-flex flex-column">
          <h1 className = "card-title pricing-card-title">${price}<small className='text-muted'>usd</small></h1>
          <ul className = "list-unstyled mt-3 mb-4 card-ul" style={{minHeight: "8rem"}}>
            {children}
          </ul>
          <button type="button" className = {buttonClassName} onClick={() => {alertaCompra(whatsappMessage)}}>Conseguir</button>
        </div>
      </div>
)
}

export function PricingText({title, children, whatsappMessage, buttonClassName, price, remoteInstallVerified}) {

  !buttonClassName ? buttonClassName = defaultButton : buttonClassName += defaultButton 
  !title ? title = "title" : ""
  !children ? children = "" : ""
  
return (
  <> 
    <h3 className='h2 pricing-text' onClick={() => {alertaCompra(whatsappMessage)}}>
      <strong>{title}: </strong>
      <span className='pricing-card-title' style={{fontWeight: "600"}}>{price}<small className='text-muted'>$usd</small></span>
      {remoteInstallVerified && <p style={{fontSize: "medium", color: "darkred"}}>Instalación remota Incluída</p>}
    </h3>
  </>
)
}

export function PriceCardTextList() {
  let priceCardList = []

  for (let i = 0; i < pricesList.length; i++) {
    priceCardList.push(
      <PricingText
        key={`pricingCard${i}`}
        title={pricesList[i].title}
        children={pricesList[i].children}
        price={pricesList[i].price}
        whatsappMessage={pricesList[i].whatsappMessage}
        remoteInstallVerified={pricesList[i].remoteInstallVerified}
      />,
    )
  }

  return priceCardList
}