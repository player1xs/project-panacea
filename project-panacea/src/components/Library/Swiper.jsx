import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules';

import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

export default function Slider({ slides }) {
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
    modules={[EffectCube, Pagination]}
    >
      {slides.map((slide) => (
         <SwiperSlide key={slide.image}>
          <img className="slider-image" src={slide.image} alt={slide.title} />
          <div className="swiper-info">
            <p className="swiper-title">{slide.title}</p>
            <p className="swiper-desc">{slide.desc}</p>
            <div className="swiper-links">
              <Link to={slide.link} className="swiper-link">Go to Page</Link>
              <Link to={slide.github} className="swiper-link">Go to Code</Link>
            </div>
          </div>
         </SwiperSlide>
      ))}
    </Swiper>
  )
}