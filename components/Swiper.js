import SwiperCore, {Navigation, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
SwiperCore.use([Navigation, Keyboard]);

export {SwiperSlide as Slide};

export default function Slides({children}) {
  return (
    <Swiper
      centeredSlides
      slidesPerView="auto"
      spaceBetween={0}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      keyboard
    >
      {children}
    </Swiper>
  );
}
