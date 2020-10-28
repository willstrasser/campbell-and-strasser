import {useEffect, useState} from 'react';
import classNames from 'classnames';
import SwiperCore, {Navigation, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
SwiperCore.use([Navigation, Keyboard]);

import styles from './Swiper.module.css';

export {SwiperSlide as Slide};

export default function Slides({children}) {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  useEffect(() => {
    if (controlledSwiper) {
      controlledSwiper.slideTo(0, 0);
    }
  }, [controlledSwiper]);

  return (
    <div className="gallery">
      <div className={classNames('swiper-button-next', styles.navigation)}>▶</div>
      <div className={classNames('swiper-button-prev', styles.navigation)}>◀</div>
      <Swiper
        centeredSlides
        slidesPerView="auto"
        spaceBetween={0}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        keyboard
        onSwiper={setControlledSwiper}
      >
        {children}
      </Swiper>
    </div>
  );
}
