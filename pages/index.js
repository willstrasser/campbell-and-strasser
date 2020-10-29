import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Layout from 'components/Layout';
import InstagramLink from 'components/InstagramLink';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './index.module.css';

SwiperCore.use([Autoplay, EffectFade]);

export default function HomePage({images, preview}) {
  return (
    <>
      <Layout preview={preview}>
        <div className={styles.slideshow}>
          <Swiper
            centeredSlides
            loop
            autoplay={{delay: 4000}}
            speed={2000}
            effect="fade"
            spaceBetween={0}
          >
            {images.map((image) => (
              <SwiperSlide key={image.sys.id}>
                <img
                  alt={image.image_description}
                  src={`${image.fields.file.url}?w=1500&h=1000`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <InstagramLink isAbsolute={true} />
      </Layout>
    </>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'home-page', 'gallery');
  return {
    props: {...data, preview: !!preview},
  };
}
