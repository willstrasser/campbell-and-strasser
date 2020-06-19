import {useRouter} from 'next/router';

import GalleryLayout from '../../components/GalleryLayout';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import {fetchPageData} from '../../utils/fetchPageData';
import {fetchGalleryData} from '../../utils/fetchGalleryData';

export default function GallerySubPage({
  gallery_group_title,
  gallery_images,
  navigation,
}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <GalleryLayout navigation={navigation}>
        <Slider>
          {gallery_images.map((image) => (
            <img
              alt={image.image_description}
              key={image.gallery_image}
              src={image.gallery_image}
            />
          ))}
        </Slider>
      </GalleryLayout>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const galleryNavData = await fetchPageData('gallery');
  const singleGalleryData = await fetchGalleryData(params.galleryId);
  return {
    props: {
      ...singleGalleryData,
      navigation: galleryNavData.galleries.map(({gallery_group_title, slug}) => ({
        title: gallery_group_title,
        slug,
      })),
    },
  };
}

export async function getStaticPaths() {
  const galleryData = await fetchPageData('gallery');
  return {
    paths: galleryData.galleries.map((gallery) => {
      return {
        params: {
          galleryId: gallery.slug,
        },
      };
    }),
    fallback: true,
  };
}
