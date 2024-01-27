import { useEffect, useState } from 'react'
import '../Navbar/Navbar.scss'


import { TfiEmail } from "react-icons/tfi";
import { VscGithub } from "react-icons/vsc";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";



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
        <div className='logo'>
          <span className='logo-span'>Benedict</span>Norton
        </div>
        {( toggleMenu || screenWidth > 1024) && (
          <ul className='list'>
            <li className='links'><a href='~about'>About</a></li>
            <li className='links'><a href='~projects'>Projects</a></li>
            <li className='links'><a href='~contact'>Contact</a></li>
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
          <div className='navbar-instaDiv'>
            <FaInstagram className='navbar-insta'/>
            <p>Gram</p>
          </div>
          <div className='navbar-githubDiv'>
            <VscGithub className='navbar-github'/>
            <p>Github</p>
          </div>
          <a href='~contact'>
            <TfiEmail className='navbar-email'/>
          </a>

        </div>
      </nav>
    </div>
  )
}