import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {fetchPageData} from 'utils/fetchPageData';

export default function ContactPage({body_text, images}) {
  return (
    <Layout>
      <Slider>
        {images.map((image) => (
          <img key={image.image} src={image.image} />
        ))}
      </Slider>
      <div dangerouslySetInnerHTML={{__html: body_text}} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetchPageData('contact');
  return {
    props: data,
  };
}
