import { Outlet, useNavigation } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.js'

//custom
import Nav from './components/Navbar/Navbar.jsx'

// import Footer from './components/Footer/Footer.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {

  const navigation = useNavigation()
    useEffect(() => {
      AOS.init()
      AOS.refresh()
    }, [])

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
        
      </main>
      <Contact />
    </>
  )
}

export default App
