import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

import Header from '../components/header'

import Wrapper from '../components/wrapper'
import Separator from '../components/separator'
import TitledParagraph from '../components/titled_paragraph'
import WhatsappStickyButton from '../components/buttons/whatsappStickyButton'
import CircleIconButton from '../components/buttons/circleIconButton'

import CardCarouselContainer from '../components/cardCarousel/cardCarouselContainer'

import aosOptions from '../components/AOS/AOS_Options'

import { whatsappAlertaFreeTrial } from '../components/carousel/slides/slideFreeTrial'

//SRC Icons
const mapIcon = './icons/alfiler.png'
const minorIcon = './icons/no-menores.png'
const contactIcon = './icons/desconocido.png'

//Gradients
export const gradient1 = {
  background: 'rgb(233,233,233)',
  background:
    'linear-gradient(270deg, rgba(233,233,233,0.5) 0%, rgba(191,191,191,0.5) 100%)',
}
export const gradient2 = {
  background: 'rgb(255,255,255)',
  background:
    'linear-gradient(0deg, rgba(255,255,255,1) 9%, rgba(196,196,196,0.3) 100%)',
}

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>
      <Separator
        id="headerSeparator"
        scrollTargetId={'openingSection'}
        color={'rgb(255,255,255)'}
      />

      {/* Introductory Information */}
      <div style={gradient1}>
        <div
          id="openingSection"
          className="position-relative top-0 start-50 translate-middle-x"
        />
        <section
          {...aosOptions.fadeUp}
          className="d-flex justify-content-center pt-3"
        >
          <div
            className="row-column"
            style={{
              maxWidth: '80%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <h1 className="title" {...aosOptions.fadeUp}>
                Celular Espía <br/> ELITE
              </h1>
              <p {...aosOptions.fadeUpXDelay} style={{ textAlign: 'center', marginBottom: "5rem" }}>
                Nuestro Software está diseñado para realizar el monitoreo de
                celulares con distintos fines tales como la seguridad y el
                control parental.
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
            <img
              src="./Images/Home/hand-holding-phone.png"
              alt="Mano Usando una App"
              className="responsive-picture"
            />
          </div>
        </section>
      </div>

      {/* Protection Section */}
      <section>
        <Wrapper
          title={'¿Cómo puede proteger?'}
          mobileTitle={'¿Protección?'}
          fontColor={'white'}
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
              src="./Images/Home/Slides/phone-chatting.png"
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
        <div style={gradient2} className="blank-container d-flex flex-column">
          <h2 style={{ textAlign: 'center', marginTop: "2.5rem" }} {...aosOptions.fadeUp}>
            ¡Control Completo en 3 Pasos!
          </h2>
          <div className="row-column">
            <CircleIconButton
              {...aosOptions.fadeUp}
              imgName={'download'}
              caption={'1. Instale el software en el dispositivo.'}
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

      <div className="h-divider">
        <div className="shadow-divider" {...aosOptions.fadeUp}></div>
        <h2
          style={{ textAlign: 'center', margin: '1vw' }}
          {...aosOptions.fadeUp}
        >
          {' '}
          Algunas de Nuestras Funciones{' '}
        </h2>
        <div {...aosOptions.fadeUp}>
          <CardCarouselContainer />
        </div>
      </div>

      <section style={{ marginTop: '5vh' }}>
        <Wrapper
          title={'Primero quiero probarlo'}
          mobileTitle={'¡Pruebe Ya!'}
          fontColor={'white'}
        >
          <div className="row-column">
            <div className="grow-on-hover">
                <img
                  src="/Images/Home/free-trial.png"
                  className="free-trial"
                  {...aosOptions.fadeUp}
                  onClick={() => whatsappAlertaFreeTrial()}
                />
            </div>
            <TitledParagraph title={'¿No está seguro? ¡Pruebe gratis!'} strong>
              Nuestro servicio ofrece un período de prubeba totalmente libre de
              costo de hasta dos días. <br />
              <br />
              No tiene por qué decidir comprar un producto del cual no está
              seguro hasta que lo pruebe usted mismo.
            </TitledParagraph>
          </div>
        </Wrapper>
      </section>

      <WhatsappStickyButton />
    </>
  )
}

export default Home
