import {useRef} from 'react';

import Slider from 'react-slick';

let KeyboardEventHandler;
if (process.browser) {
  KeyboardEventHandler = require('react-keyboard-event-handler');
}

export default function Slides({children}) {
  const slider = useRef(null);
  const settings = {
    lazyLoad: 'progressive',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {process.browser && (
        <KeyboardEventHandler
          handleKeys={['left', 'right']}
          onKeyEvent={(key, e) =>
            key === 'left' ? slider.current.slickPrev() : slider.current.slickNext()
          }
        />
      )}
      <Slider ref={slider} {...settings}>
        {children}
      </Slider>
    </>
  );
}
