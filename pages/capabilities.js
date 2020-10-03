import Layout from 'components/Layout';
import Slider from 'components/Slider';
import PageWithSubsections from 'components/PageWithSubsections';
import {fetchPageData} from 'utils/fetchPageData';

export default function CapabilitiesPage({intro, subsections, preview}) {
  return (
    <Layout preview={preview}>
      <PageWithSubsections intro={intro} subsections={subsections} />
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'capabilities');
  return {
    props: {...data, preview: !!preview},
  };
}
