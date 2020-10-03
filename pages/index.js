import Slider from 'react-slick';

import Layout from 'components/Layout';
import InstagramImages from 'components/InstagramImages';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './index.module.css';

export default function HomePage({images, preview}) {
  const settings = {
    autoplay: true,
    centerMode: true,
    fade: true,
    pauseOnHover: false,
    speed: 1500,
  };
  return (
    <>
      <Layout preview={preview}>
        <div className={styles.slideshow}>
          <Slider {...settings}>
            {images.map((image) => (
              <img
                alt={image.image_description}
                key={image.sys.id}
                src={`${image.fields.file.url}`}
              />
            ))}
          </Slider>
        </div>
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
