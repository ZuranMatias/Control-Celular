import React from 'react'

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
      window.location.href = link;
    }
  });
}

function PricingCard({title, children, whatsappMessage, buttonClassName, price}) {

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

export default PricingCard
