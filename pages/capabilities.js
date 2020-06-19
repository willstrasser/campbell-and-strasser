import Layout from '../components/Layout';
import Slider from '../components/Slider';
import {fetchPageData} from '../utils/fetchPageData';

export default function CapabilitiesPage({intro_text, subsections}) {
  return (
    <Layout>
      <div>{intro_text}</div>
      {subsections.map(({title, body, image}) => {
        return (
          <div key={title}>
            <Slider>
              <img src={image} />
            </Slider>
            <div>{title}</div>
            <div dangerouslySetInnerHTML={{__html: body}} />
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchPageData('capabilities');
  return {
    props: data,
  };
}
