import React from 'react'

import Header from '../components/header'

import Wrapper from '../components/wrapper'
import Separator from '../components/separator'
import TitledParagraph from '../components/titled_paragraph'
import WhatsappStickyButton from '../components/buttons/whatsappStickyButton'
import CircleIconButton from '../components/buttons/circleIconButton'

import aosOptions from '../components/AOS/AOS_Options'

//SRC Icons
const mapIcon = './icons/alfiler.png'
const minorIcon = './icons/no-menores.png'
const contactIcon = './icons/desconocido.png'

//Gradients
const gradient1 = {
  background: "rgb(233,233,233)",
  background: "linear-gradient(270deg, rgba(233,233,233,0.5) 0%, rgba(191,191,191,0.5) 100%)"
}

function Home() {
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>
      <Separator id="headerSeparator" scrollTargetId={'openingSection'} color={'rgb(255,255,255)'} />

      {/* Introductory Information */}
      <div id="openingSection" className="position-relative top-0 start-50 translate-middle-x" />
      <section {...aosOptions.fadeUp} className='d-flex justify-content-center pt-3' style={gradient1}>
        <div className="row-column" style={{maxWidth: "80%", justifyContent: "center", alignItems: "center"}} >
          <div style={{ textAlign: 'center' }}>
            <h1 className='title' {...aosOptions.fadeUp}>ELITE</h1>
            <p {...aosOptions.fadeUpXDelay} style={{ textAlign: 'center' }}>
              Nuestro Software está diseñado para realizar el monitoreo de
              celulares con distintos fines tales como la seguridad y el control
              parental.
              <span className="desktop-only">
                Esto es posible gracias a que permite grabar y hacer copias de
                toda la información que genere un dispositivo.
              </span>
              <span className="mobile-only">
                <br />
                <br />
              </span>
              En esta página, te contamos acerca de nuestro servicio para que
              puedas, entre otras cosas, monitorear Whatsapp en celulares.
            </p>
          </div>
            <img src="./Images/Home/hand-holding-phone.png" alt="Mano Usando una App" className='responsive-picture' />
        </div>
      </section>

      {/* Protection Section */}
      <section>
        <Wrapper
          title={'¿Cómo puede proteger?'}
          mobileTitle={'¿Protección?'}
          fontColor={"white"}
        >
          <div className="row-column">
            <TitledParagraph title={'Mensajes Explícitos'} iconSrc={minorIcon}>
              Garantiza la privacidad de tus seres queridos con nuestra
              aplicación, que te permite monitorear y leer chats para prevenir
              la exposición a mensajes inapropiados.
            </TitledParagraph>
            <TitledParagraph title={'Seguridad'} iconSrc={mapIcon}>
              Garantiza la ubicación segura de su dispositivo con la función de
              rastreo GPS en tiempo real, brindándote tranquilidad al conocer su
              paradero constante.
            </TitledParagraph>
            <TitledParagraph
              title={'Contactos Sospechosos'}
              iconSrc={contactIcon}
            >
              Protege a tus seres queridos sabiendo exactamente a quién le habla
              y cuánto a través de la función de detección de contactos en el
              dispositivo.
            </TitledParagraph>
          </div>
          <div className="row-column desktop-only">
            <img
              className="divider-bottom-image-framed"
              src="./Images/Home/phone-chatting.png"
              {...aosOptions.fadeRight}
            />
            <img
              className="divider-bottom-image-framed"
              src="./Images/Home/gps-map.png"
              {...aosOptions.fadeRightDelay}
            />
            <img
              className="divider-bottom-image-framed"
              src="./Images/Home/hacker-framed.png"
              {...aosOptions.fadeRightXDelay}
            />
          </div>
        </Wrapper>
      </section>

      {/* Instructions Information */}
      <section {...aosOptions.fadeUp}>
        <div className="blank-container d-flex flex-column">
          <h1 style={{ textAlign: 'center' }} {...aosOptions.fadeUp}>
            ¡Control Completo en 3 Pasos!
          </h1>
          <div className="row-column">
            <CircleIconButton
              {...aosOptions.fadeUp}
              imgName={'download'}
              caption={
                '1. Instale el software en el dispositivo o compre uno con el programa ya instalado.'
              }
            />
            <CircleIconButton
              {...aosOptions.fadeUp}
              style={{ marginLeft: '2vw', marginRight: '2vw' }}
              imgName={'regalo'}
              caption={'2. Entregue el celular a la persona correspondiente.'}
            />
            <CircleIconButton
              {...aosOptions.fadeUp}
              imgName={'lupa'}
              caption={
                '3. ¡Listo! Ahora ya puede monitorear el celular en nuestra app.'
              }
            />
          </div>
        </div>
      </section>

      <WhatsappStickyButton />
    </>
  )
}

export default Home
