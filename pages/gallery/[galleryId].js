import {useRouter} from 'next/router';

import GalleryLayout from 'components/GalleryLayout';
import Layout from 'components/Layout';
import Swiper, {Slide} from 'components/Swiper';
import {getClient} from 'utils/contentfulClient';

import styles from './[galleryId].module.css';

export default function GallerySubPage({images, preview}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout preview={preview}>
      <Swiper>
        {images.map((image) => (
          <Slide key={image.sys.id}>
            <img
              className={styles.image}
              // alt={image.fields.description}
              // src={`${image.fields.file.url}?w=1000`}
            />
            {/* <span>{image.fields.description}</span> */}
          </Slide>
        ))}
      </Swiper>
    </Layout>
  );
}

export async function getStaticProps({params, preview}) {
  const galleries = await getClient(preview).getEntries({
    content_type: 'gallery',
  });
  const gallery = galleries.items.find(
    (gallery) => gallery.fields.slug === params.galleryId.toLowerCase()
  );
  return {
    props: {
      ...gallery.fields,
      preview: !!preview,
    },
  };
}

export async function getStaticPaths() {
  const galleries = await getClient(false).getEntries({
    content_type: 'gallery',
  });
  const filteredPaths = galleries.items.filter(
    (path) => path.fields.slug !== 'in-the-works'
  );
  const paths = filteredPaths.map((gallery) => {
    return {
      params: {
        galleryId: gallery.fields.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
