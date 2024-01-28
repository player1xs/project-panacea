import hero from '../../assets/coderguy.jpeg'
import react from '../../assets/react-icon.png'
import node from '../../assets/node-js-icon.png'
import python from '../../assets/python-icon.png'

export default function Home() {

  return (
    <>
      <div className='Home' id='home'>
        <div className='Home-container'>
          <div className='home-left'>
            <p className='home-left-subtitle'>Full-Stack Developer</p>
            <div className='home-left-title'>
              <p>Make it Work. Make it Right. Make it Fast.</p>
            </div>
            <div className='home-left-info'>
              <p>I create front- and back-end applications,</p>
              <p>and I love what I do.</p>
            </div>
            <a href='~contact' className='home-left-a'>get in touch</a>
          </div>
          <div className='home-right'>
            <img src={hero} alt='hero' className='home-right-hero' />
            <div className='home-right-circle home-right-react'>
              <img src={react} alt='react' />
            </div>
            <div className='home-right-circle home-right-node'>
              <img src={node} alt='node' />
            </div>
            <div className='home-right-circle home-right-python'>
              <img src={python} alt='python' />
            </div>
          </div>
          <div className='home-miniInfo'>
            <p className='info-number'>1st</p>
            <p className='info-desc'>year of experience</p>
            <p className='info-number'>4</p>
            <p className='info-desc'>projects completed in different languages</p>
          </div>
        </div>
      </div>
    </>
  )
}