import { Link } from 'react-router-dom'

import './Footer.scss'

// import { FaInstagram } from "react-icons/fa6";
// import { VscGithub } from "react-icons/vsc";
// import { CiLinkedin } from "react-icons/ci";

export default function Home() {

  return(
    <>
      <div className='Footer'>
        <div className='footer-rights'>
          <p className='footer-name'>
            <span>Benedict</span> Norton
          </p>
          <p className='footer-copyrights'>@ All Rights Reserved</p>
        </div>
        <div className='footer-contact'>
        <Link to="/contact" className='footer-contact-link'>Contact Form</Link>
        </div>
        {/* <div className='footer-socials'>
          <a href='insta' className='footer-social-icon'><FaInstagram className='footer-social-icon'/></a>
          <a href='github' className='footer-social-icon'><VscGithub className='footer-social-icon'/></a>
          <a href='linkedin' className='footer-social-icon'><CiLinkedin className='footer-social-icon'/></a>
        </div> */}
      </div>
    </>
  )
}