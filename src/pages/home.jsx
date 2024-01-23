import React from 'react'

import Header from '../components/header'
import Wrapper from '../components/wrapper'
import Separator from '../components/separator'
import TitledParagraph from '../components/titled_paragraph'
import WhatsappStickyButton from '../components/buttons/whatsappStickyButton'

import aosOptions from '../components/AOS/AOS_Options'


//SRC Icons
const mapIcon = "./icons/alfiler.png"
const minorIcon = "./icons/no-menores.png"
const contactIcon = "./icons/desconocido.png"

function Home() {
  return (
    <>
      {/* Header */}
      <section>
        <Header />
      </section>
      <Separator color={'rgb(255,255,255)'} />

      {/* Instructions Information */}
      <section {...aosOptions.fadeUp}>
        <div className="blank-container d-flex flex-column">
          <h1>Control Celular</h1>
          <h2>¡Control Completo en 3 Pasos!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus mollitia quod, deserunt, totam quis maxime possimus at
            amet, commodi doloribus dicta velit sequi? Harum corporis minus fuga
            repellat dolore molestias!
          </p>
        </div>
      </section>

      {/* Protection Section */}
      <section {...aosOptions.fadeDown}>
        <Wrapper color={'light-blue'} title={'¿Cómo puede proteger?'} mobileTitle={'¿Protección?'} >
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
            <TitledParagraph title={'Contactos Sospechosos'} iconSrc={contactIcon}>
              Protege a tus seres queridos sabiendo exactamente a quién le habla
              y cuánto a través de la función de detección de contactos en el
              dispositivo.
            </TitledParagraph>
          </div>
          {/* <div className='row-column desktop-only'>
            <img className='divider-bottom-image' src='./Images/Home/hand-holding-phone.png' {...aosOptions.fadeRight}/>
            <img className='divider-bottom-image' src='./Images/Home/phone-gps.png' {...aosOptions.fadeRightDelay}/>
            <img className='divider-bottom-image' src='./Images/Home/hacker.png' {...aosOptions.fadeRightXDelay}/>
          </div> */}
          <div className='row-column desktop-only'>
            <img className='divider-bottom-image-framed' src='./Images/Home/phone-chatting.png' {...aosOptions.fadeRight}/>
            <img className='divider-bottom-image-framed' src='./Images/Home/gps-map.png' {...aosOptions.fadeRightDelay}/>
            <img className='divider-bottom-image-framed' src='./Images/Home/hacker-framed.png' {...aosOptions.fadeRightXDelay}/>
          </div>
        </Wrapper>
      </section>

      {/* Introductory Information */}
      <section {...aosOptions.fadeUp}>
        <div className="blank-container d-flex flex-column">
          <h1>Control Celular</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus mollitia quod, deserunt, totam quis maxime possimus at
            amet, commodi doloribus dicta velit sequi? Harum corporis minus fuga
            repellat dolore molestias!
          </p>
        </div>
      </section>

      <WhatsappStickyButton/>
    </>
  )
}

export default Home
