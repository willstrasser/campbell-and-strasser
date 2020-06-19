import Layout from '../components/Layout';
import Slider from '../components/Slider';
import {fetchPageData} from '../utils/fetchPageData';

export default function TheShopPage({intro_text, subsections}) {
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
  const data = await fetchPageData('the-shop');
  return {
    props: data,
  };
}
