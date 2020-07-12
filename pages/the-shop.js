import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

import Layout, {Intro} from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function TheShopPage({intro, preview}) {
  return (
    <Layout preview={preview}>
      <Intro>{documentToReactComponents(intro)}</Intro>
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'the-shop');
  return {
    props: {...data, preview: !!preview},
  };
}
