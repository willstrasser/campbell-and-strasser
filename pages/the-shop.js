import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function TheShopPage({intro}) {
  return (
    <Layout>
      <div>{documentToReactComponents(intro)}</div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const data = await fetchPageData(context.preview, 'the-shop');
  return {
    props: data,
  };
}
