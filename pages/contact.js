import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function ContactPage({intro, preview}) {
  return (
    <Layout preview={preview}>
      <div>{documentToReactComponents(intro)}</div>
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'contact');
  return {
    props: {...data, preview: !!preview},
  };
}
