import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout, {Intro, Section} from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

import styles from './contact.module.css';

export default function ContactPage({intro, preview}) {
  return (
    <Layout preview={preview}>
      <Section>
        <div className={styles.contact}>{documentToReactComponents(intro)}</div>
      </Section>
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'contact');
  return {
    props: {...data, preview: !!preview},
  };
}
