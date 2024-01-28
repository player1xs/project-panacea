import { Outlet, useNavigation } from 'react-router-dom'

//custom
import Nav from './components/Navbar/Navbar.jsx'
import About from './components/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  const navigation = useNavigation()

  return (
    <>
      <Nav />
      <main>
        {
          navigation.state === 'idle' ?
          <Outlet />
          :
          <div className='spinnerDiv'>
            Loading...
          </div>
        }
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
