import {AnimatePresence} from 'framer-motion';

import 'styles/global.css';
import 'styles/reset.css';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

export default function MyApp({Component, pageProps, router}) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
}
