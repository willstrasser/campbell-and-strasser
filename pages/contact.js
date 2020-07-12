import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout, {Intro} from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './contact.module.css';

export default function ContactPage({intro, preview}) {
  return (
    <Layout preview={preview}>
      <Intro><div className={styles.contact}>{documentToReactComponents(intro)}</div></Intro>
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'contact');
  return {
    props: {...data, preview: !!preview},
  };
}
