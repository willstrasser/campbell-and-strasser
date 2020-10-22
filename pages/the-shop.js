import InstagramLink from 'components/InstagramLink';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import PageWithSubsections from 'components/PageWithSubsections';
import {fetchPageData} from 'utils/fetchPageData';

export default function CapabilitiesPage({introImages, intro, subsections, preview}) {
  return (
    <Layout preview={preview}>
      <PageWithSubsections
        images={introImages}
        intro={intro}
        subsections={subsections}
      />
      <InstagramLink isAbsolute={false} isBlack={true} />
    </Layout>
  );
}

export async function getStaticProps({preview}) {
  const data = await fetchPageData(preview, 'the-shop');
  return {
    props: {...data, preview: !!preview},
  };
}
