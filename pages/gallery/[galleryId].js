import {useRouter} from 'next/router';

import GalleryLayout from 'components/GalleryLayout';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {contentfulClient} from 'utils/contentfulClient';

export default function GallerySubPage({images, navigation}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <GalleryLayout navigation={navigation}>
        <Slider>
          {images.map((image) => (
            <img
              alt={image.image_description}
              key={image.sys.id}
              src={image.fields.file.url}
            />
          ))}
        </Slider>
      </GalleryLayout>
    </Layout>
  );
}

export async function getStaticProps({params}) {
  const galleries = await contentfulClient.getEntries({
    content_type: 'gallery',
  });
  const gallery = await contentfulClient.getEntries({
    'content_type': 'gallery',
    'fields.slug': params.galleryId.toLowerCase(),
  });
  return {
    props: {
      ...gallery.items[0].fields,
      navigation: galleries.items.map((item) => ({
        title: item.fields.title,
        slug: item.fields.title,
      })),
    },
  };
}

export async function getStaticPaths() {
  const galleries = await contentfulClient.getEntries({
    content_type: 'gallery',
  });
  return {
    paths: galleries.items.map((gallery) => {
      return {
        params: {
          galleryId: gallery.fields.slug,
        },
      };
    }),
    fallback: true,
  };
}
