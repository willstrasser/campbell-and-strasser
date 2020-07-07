import {useRouter} from 'next/router';

import GalleryLayout from 'components/GalleryLayout';
import Layout from 'components/Layout';
import Slider from 'components/Slider';
import {getClient} from 'utils/contentfulClient';

export default function GallerySubPage({images, navigation, preview}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout preview={preview}>
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

export async function getStaticProps({params, preview}) {
  const galleries = await getClient(preview).getEntries({
    content_type: 'gallery',
  });
  const gallery = galleries.items.find(
    (gallery) => gallery.fields.slug === params.galleryId.toLowerCase()
  );
  return {
    props: {
      ...gallery.fields,
      navigation: galleries.items.map(({fields: {slug, title}}) => ({
        slug,
        title,
      })),
      preview: !!preview,
    },
  };
}

export async function getStaticPaths() {
  const galleries = await getClient(false).getEntries({
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
