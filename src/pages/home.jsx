import React from 'react'

import Header from '../components/header'
import Wrapper from '../components/wrapper'
import Separator from '../components/navbar/separator'

function Home() {
  return (
    <>
      <section> <Header /> </section>
      <Separator color={"rgb(255,255,255)"}/>
      <section>
        <div className='blank-container d-flex flex-column'>
          <h1>Control Celular</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus mollitia quod, deserunt, totam quis maxime possimus at amet, commodi doloribus dicta velit sequi? Harum corporis minus fuga repellat dolore molestias!</p>
        </div>
      </section>
      <Wrapper color={"light-blue"} title={"el control parental"}> </Wrapper>
      <Wrapper color={'red'}> </Wrapper>
      <Wrapper color={'black'}> </Wrapper>
    </>
  )
}

export default Home
