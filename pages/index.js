import Layout from 'components/Layout';
import InstagramImages from 'components/InstagramImages';
import Slider from 'components/Slider';

export default function HomePage({preview}) {
  return (
    <>
      <Layout preview={preview} />
      <Slider>
        <InstagramImages handle="campbellandstrasser" />
      </Slider>
    </>
  );
}
