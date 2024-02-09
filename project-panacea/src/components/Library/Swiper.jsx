import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCube, Pagination, Navigation } from 'swiper/modules';

import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import p1 from '../../assets/p1-lib.png'
import p2 from '../../assets/p2-lib.png'
import p3 from '../../assets/p3-lib.png'
import p4 from '../../assets/p4-lib.png'

export default function Slider() {
  return(
    <Swiper 
    className='mySwiper'
    effect={'cube'}
    grabCursor={true}
    cubeEffect={{
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }}
    pagination={true}
    navigation={{clickable: true,}}
    modules={[EffectCube, Pagination, Navigation]}
    >
         <SwiperSlide>
          <img className="slider-image" src={p1} alt="Space-Invaders" />
          <div className="swiper-info">
            <p className="swiper-title">Space-Invaders</p>
            <p className="swiper-desc">An in-browser game using vanilla JavaScript built on a grid system instead of canvas. Using classic arcade soundbites, with a Star Wars theme</p>
            <div className="swiper-links">
              <Link to="https://player1xs.github.io/Space-Invaders/" className="swiper-link">Go to Page</Link>
              <Link to="https://github.com/player1xs/Space-Invaders" className="swiper-link">Go to Code</Link>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <img className="slider-image" src={p2} alt="Dapper Tipples" />
          <div className="swiper-info">
            <p className="swiper-title">Dapper Tipples</p>
            <p className="swiper-desc">Paircoded project to display React and Express API skills, extrating information from a public cocktail database</p>
            <div className="swiper-links">
              <Link to="https://dappertipples.netlify.app" className="swiper-link">Go to Page</Link>
              <Link to="https://github.com/player1xs/dapper-tipples" className="swiper-link">Go to Code</Link>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <img className="slider-image" src={p3} alt="Vinous Voyages" />
          <div className="swiper-info">
            <p className="swiper-title">Vinous Voyages</p>
            <p className="swiper-desc">Group project, building a backend with MongoDB and React frontend. A page where one can browse and search wineries of the world, including Mapbox.</p>
            <div className="swiper-links">
              <Link to="https://bn-vinous-voyages-ee552d981c31.herokuapp.com" className="swiper-link">Go to Page</Link>
              <Link to="https://github.com/player1xs/Vinous-Voyages" className="swiper-link">Go to Code</Link>
            </div>
          </div>
         </SwiperSlide>
         <SwiperSlide>
          <img className="slider-image" src={p4} alt="Cirque du Sore-Legs" />
          <div className="swiper-info">
            <p className="swiper-title">Cirque du Sore-Legs</p>
            <p className="swiper-desc">Solo project, building a backend with Django and React frontend. A running event page. Create your own event or comment on establish events and let others know you are going (advanced CSS)</p>
            <div className="swiper-links">
              <Link to="https://player1xs.github.io/Space-Invaders/" className="swiper-link">Go to Page</Link>
              <Link to="https://github.com/player1xs/Cirque-du-Sore-Legs" className="swiper-link">Go to Code</Link>
            </div>
          </div>
         </SwiperSlide>
    </Swiper>
  )
}