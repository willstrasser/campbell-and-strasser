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
              <Link href={`/gallery/${slug}`}>
                <div className={styles.link}>
                  <img
                    alt={image.image_description}
                    key={image.sys.id}
                    src={image.fields.file.url}
                  />
                  <a>{title}</a>
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
  const galleries = await getClient(preview).getEntries({
    content_type: 'gallery',
  });
  return {
    props: {
      navigation: galleries.items.map(({fields: {slug, title, images}}) => ({
        slug,
        title,
        image: images[0],
      })),
      preview: !!preview,
    },
  };
}
