import { Link } from 'react-router-dom'

import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'

export default function Projects() {

  return(
    <>
      <div className='Projects' id='projects'>
        <div className='Projects-container'>
          <div className='projects-left' data-aos='fade-right'>
            <p className='projects-left-title'>Latest Works</p>
            <p className='projects-left-subtitle'>
              Perfect solutions for digital experience
            </p>
            <img src={p1} className='projects-img' alt='p1' />
            <Link to={'/library'} className='projects-btn'>All Projects</Link>
            <p className='projects-left-extra'>
            Some projects are not listed, to see more go to my {""} <a href="https://github.com/player1xs">Github</a> or <Link to="/contact">contact me</Link>
            </p>
          </div>
          <div className='projects-right' data-aos='flip-right' data-aos-delay='500'>
            <img src={p2} alt='p2' className='projects-img' />
            <img src={p3} alt='p3' className='projects-img' />
          </div>
        </div>
      </div>
    </>
  )
}