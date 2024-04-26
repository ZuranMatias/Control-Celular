//Packages
import { BrowserRouter, HashRouter } from 'react-router-dom'

//Components
import PageRoutes from './pages/routes'

import HelmetComponent from './components/helmet'

import NavbarContainer from './components/navbar/navbar_container'
import Footer from './components/footer'

//Hooks
import AOSInitializer from './components/AOS/AOS_Initializer'

//Styles
import '../css/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  AOSInitializer()

  return (
    <>
      <HashRouter>
        <HelmetComponent />
        <NavbarContainer />
        <PageRoutes />
      </HashRouter>
      <Footer />
    </>
  )
}

export default App
