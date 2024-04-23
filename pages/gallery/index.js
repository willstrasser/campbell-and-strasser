import Head from 'next/head';
import Link from 'next/link';

import Layout from 'components/Layout';
import {getClient} from 'utils/contentfulClient';

import styles from './index.module.css';

export default function GalleryIndex({navigation, preview}) {
  return (
    <Layout preview={preview}>
      <ul className={styles.gridContainer}>
        {navigation.map(({title, slug, image}) => {
          return (
            <li className={styles.item} key={slug}>
              <Link href={`/gallery/${slug}`} legacyBehavior>
                <div className={styles.link}>
                  <img
                    alt={image.image_description}
                    key={image.sys.id}
                    src={`${image.fields.file.url}?w=600&h=400&fit=fill`}
                  />
                  {title}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const orderedGalleries = await getClient(preview).getEntry('3f5i95YYyhpamAF690kJ5m');
  const galleries = orderedGalleries.fields.ordering;
  return {
    props: {
      navigation: galleries.map(({fields: {slug, title, images, indexImage}}) => ({
        slug,
        title,
        image: indexImage || images[0],
      })),
      preview: !!preview,
      orderedGalleries,
    },
  };
}
