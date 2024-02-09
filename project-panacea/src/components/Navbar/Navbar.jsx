import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'


// import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { AiFillLinkedin } from "react-icons/ai";



export default function Nav() {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return() => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (
    <div className='Navbar'>
      <nav>
        <Link to='/' className='logo'>
          <span className='logo-span'>Project</span>Panacea
        </Link>
        {( toggleMenu || screenWidth > 1024) && (
          <ul className='list'>
            <li className='links'><Link to="/profile">About Me</Link></li>
            <li className='links'><Link to="/library">Projects</Link></li>
            
          </ul>
        )}
        <div className='menuIcons'>
          {toggleMenu ? (
            <IoCloseCircleOutline
            className='menu-icon'
            onClick={() => setToggleMenu(false)}
            alt='' />
          ) : (
            <RxHamburgerMenu 
            className='menu-icon'
            onClick={() => setToggleMenu(true)}
            alt='' />
          )}
        </div>
        <div className='navbar-socials'>
          <Link to="https://linkedin.com/in/benedict-norton" className='navbar-instaDiv'>
            <AiFillLinkedin className='navbar-insta' style={{ fill: 'Black' }}/>
            <p className="navbar-social-text">LinkedIn</p>
          </Link>
          <Link to="https://github.com/player1xs" className='navbar-githubDiv'>
            <VscGithub className='navbar-github' style={{ fill: 'black' }}/>
            <p className="navbar-social-text">Github</p>
          </Link>
          {/* <a href='~contact'>
            <TfiEmail className='navbar-email' style={{ fill: 'white' }}/>
          </a> */}

        </div>
      </nav>
    </div>
  )
}