import Layout from 'components/Layout';
import InstagramImages from 'components/InstagramImages';

export default function HomePage({preview}) {
  return (
    <>
      <Layout preview={preview}>
        <InstagramImages handle="campbellandstrasser" />
      </Layout>
    </>
  );
}
