import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function ContactPage({intro}) {
  return (
    <Layout>
      <div>{documentToReactComponents(intro)}</div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await fetchPageData(context.preview, 'contact');
  return {
    props: data,
  };
}
