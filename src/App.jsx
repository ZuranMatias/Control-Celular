//Packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Components
import Header from './components/header'
import SectionTitle from './components/section_title'
import Wrapper from './components/wrapper'

import '../css/app.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Wrapper color={"blue"}/>
        <Wrapper color={"red"}/>
        <Wrapper color={"black"}/>
      </BrowserRouter>
    </>
  )
}

export default App
