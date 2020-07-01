import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function CapabilitiesPage({intro}) {
  return (
    <Layout>
      <div>{documentToReactComponents(intro)}</div>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchPageData('capabilities');
  return {
    props: data,
  };
}
