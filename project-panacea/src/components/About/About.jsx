import { FaBezierCurve } from "react-icons/fa6";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { BsDatabaseFillGear } from "react-icons/bs";

export default function About() {
  return(
    <>
      <div className='About'>
        <div className='about-left'>
          <div className='about-cards'>
            <div className='about-card' data-aos='fade-right' data-aos-delay='500'>
              <div className='card-top'>
                <p className='card-title'>Design</p>
                <FaBezierCurve className='card-icon' alt='icon' />
              </div>
              <p className='card-desc'>Create digital products with unique ideas</p>
              {/* with Sass and Bootstrap ---- get rid of projects below */}
              {/* <p className='card-link'>20 projects</p> */}
            </div>
            <div className='about-card' data-aos='fade-right' data-aos-delay='500'>
              <div className='card-top'>
                <p className='card-title'>Front-End</p>
                <HiMiniCodeBracket className='card-icon' alt='icon' />
              </div>
              <p className='card-desc'>Develop front-end applications with React</p>
              {/* <p className='card-link'>20 projects</p> */}
            </div>
            <div className='about-card' data-aos='fade-right' data-aos-delay='500'>
              <div className='card-top'>
                <p className='card-title'>Back-End</p>
                <BsDatabaseFillGear className='card-icon' alt='icon' />
              </div>
              <p className='card-desc'>Build tables and libraries in Django and MongoDB</p>
              {/* REST API to talk to frontend */}
              {/* <p className='card-link'>20 projects</p> */}
            </div>
          </div>
        </div>
        <div className='about-right'>
          <p className='about-subtitle'>Introducing</p>
          <p className='about-title'>Hello! I am Benedict Norton</p>
          <p className='about-info'>Every great design begins with an even better story</p>
          <p className='about-desc'>Junior Developer with a thirst for learning. Creative full-stack dev with a flair for bringing innovative UX designs to life. Passionate about implementing user-friendly platforms with simple functionality. Seeking to develop my skills even further, get in touch if you need a project done.</p>
        </div>
      </div>
    </>
  )
}