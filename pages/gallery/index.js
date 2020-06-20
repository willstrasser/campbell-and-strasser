import GalleryLayout from 'components/GalleryLayout';
import Layout from 'components/Layout';
import {fetchPageData} from 'utils/fetchPageData';

export default function GalleryPage({navigation}) {
  return (
    <Layout>
      <GalleryLayout navigation={navigation}>gallery home</GalleryLayout>
    </Layout>
  );
}

export async function getStaticProps() {
  const galleryNavData = await fetchPageData('gallery');
  return {
    props: {
      navigation: galleryNavData.galleries.map(({gallery_group_title, slug}) => ({
        title: gallery_group_title,
        slug,
      })),
    },
  };
}
