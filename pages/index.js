import Layout from 'components/Layout';
import InstagramImages from 'components/InstagramImages';
import Slider from 'components/Slider';

export default function HomePage() {
  return (
    <>
      <Layout />
      <Slider>
        <InstagramImages handle="campbellandstrasser" />
      </Slider>
    </>
  );
}
