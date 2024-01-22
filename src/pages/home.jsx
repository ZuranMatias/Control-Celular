import React from 'react'

import Header from '../components/header'
import Wrapper from '../components/wrapper'
import Separator from '../components/separator'

import aosOptions from '../components/AOS/AOS_Options'

import TitledParagraph from '../components/titled_paragraph'

function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <Separator color={'rgb(255,255,255)'} />
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

      <section {...aosOptions.fadeUp}>
        <Wrapper
          color={'light-blue'}
          title={'¿Cómo puede proteger?'}
          mobileTitle={'¿Protección?'}
        >
          <div className="row-column">
            <TitledParagraph title={'Mensajes Explícitos'}>
              Garantiza la privacidad de tus seres queridos con nuestra
              aplicación, que te permite monitorear y leer chats para prevenir
              la exposición a mensajes inapropiados.
            </TitledParagraph>
            <TitledParagraph title={'Seguridad'}>
              Garantiza la ubicación segura de su dispositivo con la función de
              rastreo GPS en tiempo real, brindándote tranquilidad al conocer su
              paradero constante.
            </TitledParagraph>
            <TitledParagraph title={'Contactos Sospechosos'}>
              Protege a tus seres queridos sabiendo exactamente a quién le habla
              y cuánto a través de la función de detección de contactos en el
              dispositivo.
            </TitledParagraph>
          </div>
        </Wrapper>
      </section>

      {/* <section {...aosOptions.fadeUp}> <Wrapper color={"red"} title={"el control parental"}> </Wrapper> </section> */}
      {/* <section {...aosOptions.fadeUp}> <Wrapper color={"black"} title={"el control parental"}> </Wrapper> </section> */}
    </>
  )
}

export default Home
