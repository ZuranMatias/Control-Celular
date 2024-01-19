//Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/header'
import Wrapper from './components/wrapper'
import SidebarContainer from './components/navbar/sidebar/sidebar_container'

import '../css/app.css'

function App() {
  return (
    <>
        <SidebarContainer/>
        <Header />
        <Wrapper color={'blue'}> </Wrapper>
        <Wrapper color={'red'}> </Wrapper>
        <Wrapper color={'black'}> </Wrapper>
        <Wrapper color={'blue'}> </Wrapper>
        <Wrapper color={'red'}> </Wrapper>
        <Wrapper color={'black'}> </Wrapper>
    </>
  )
}

export default App
