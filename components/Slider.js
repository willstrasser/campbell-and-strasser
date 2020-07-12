import Slider from 'react-slick';

export default function Slides({children}) {
  const settings = {
    // autoplay: true,
    // fade: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return <Slider {...settings}>{children}</Slider>;
}
