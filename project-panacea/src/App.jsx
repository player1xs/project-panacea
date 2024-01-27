import { Outlet, useNavigation } from 'react-router-dom'

//custom
import Nav from './components/Navbar/Navbar.jsx'

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
    </>
  )
}

export default App
