import React from 'react'

import Header from '../components/header'
import Wrapper from '../components/wrapper'
import Separator from '../components/navbar/separator'

function Home() {
  return (
    <>
      <section>
        <Header />
      </section>
      <Separator color={"rgb(255,255,255)"}/>
      <section>
        <div className='blank-container'>
          <h1>Control Celular</h1>
        </div>
      </section>
      <Wrapper color={'blue'}> </Wrapper>
      <Wrapper color={'red'}> </Wrapper>
      <Wrapper color={'black'}> </Wrapper>
    </>
  )
}

export default Home
