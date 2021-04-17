import Image from 'next/image';

import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import Layout from 'components/Layout';
import InstagramLink from 'components/InstagramLink';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './index.module.css';

SwiperCore.use([Autoplay, EffectFade]);

export default function HomePage({images, preview}) {
  const imageOptions = process.env.NODE_ENV === 'development' ? `?w=${500}` : '';
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
                <div style={{height: '100vh', width: '100vw'}}>
                  <Image
                    alt={image.image_description}
                    src={`https:${image.fields.file.url}${imageOptions}`}
                    layout="fill"
                  />
                </div>
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
