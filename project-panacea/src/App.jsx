import { Outlet, useNavigation } from 'react-router-dom'

//custom
import Nav from './components/Navbar/Navbar.jsx'
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
      </main>
      <Footer />
    </>
  )
}

export default App
