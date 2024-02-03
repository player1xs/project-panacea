// import SwiperCore from 'swiper'
// import { Navigation, Pagination } from 'swiper/modules';
import slides from './library.json'
import Slider from './Swiper'


export default function Library() {
  return(
    <>
      <div className="Library">
        <div className="Library-container">
          <div className="library-top">
            <p className="library-title">Portfolio</p>
            <p className="library-text"><span className="cube">Spin the Cube</span> below for some featured projects I have worked on.</p>
            <p className="library-text">Navigate to the page itself, Or click on "Go to Code" which will take you to the Github of said application.</p>
          </div>
          <div className="library-slider">
            <Slider slides={slides} />
          </div>
        </div>
      </div>
    </>
  )
}