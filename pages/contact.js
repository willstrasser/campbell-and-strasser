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
        {introImages &&
          introImages.map((image) => (
            <img
              key={image.fields.file.url}
              alt={image.image_description}
              src={`${image.fields.file.url}?w=1000&h=300&fit=fill`}
            />
          ))}
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
