import Image from 'next/legacy/image';

import SwiperCore, {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import {useMediaQuery} from '/components/useMediaQuery';
import Layout from 'components/Layout';
import InstagramLink from 'components/InstagramLink';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './index.module.css';

SwiperCore.use([Autoplay, EffectFade]);

export default function HomePage({images, mobileImages, preview}) {
  const imagesWithFile = images.filter((image) => image.fields?.file);
  const mobileWithFile = mobileImages.filter((image) => image.fields?.file);
  const mobileFallback = mobileWithFile || imagesWithFile;
  const isMobile = useMediaQuery(`(max-width: 767.98px)`);
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
            {(!isMobile || isMobile === undefined) &&
              imagesWithFile.map((image) => (
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
            {(isMobile || isMobile === undefined) &&
              mobileFallback.map((image) => (
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
