import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import InstagramLink from 'components/InstagramLink';
import Layout, {Images, Intro, Section} from 'components/Layout';
import {Swiper, SwiperSlide} from 'swiper/react';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './contact.module.css';

export default function ContactPage({introImages, intro, preview}) {
  return (
    <Layout preview={preview}>
      <Images>
        <Swiper centeredSlides loop autoplay={{delay: 4000}} speed={2000} effect="fade">
          {introImages &&
            introImages.map((image) => (
              <SwiperSlide key={image.sys.id}>
                <img
                  alt={image.image_description}
                  src={`${image.fields.file.url}?w=1000&h=300&fit=fill`}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Images>
      <Section>
        <div className={styles.contact}>{documentToReactComponents(intro)}</div>
      </Section>
      <InstagramLink isAbsolute={true} isBlack={true} />
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'contact');
  return {
    props: {...data, preview: !!preview},
  };
}
