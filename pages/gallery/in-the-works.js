import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import userInstagram from 'user-instagram';

import GalleryLayout from 'components/GalleryLayout';
import Layout from 'components/Layout';
import Swiper, {Slide} from 'components/Swiper';

import styles from './[galleryId].module.css';

export default function InTheWorks() {
  const router = useRouter();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await userInstagram('campbellandstrasser');
      setData(result);
    };

    fetchData();
  }, []);
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div className={styles.centerer}>
        {data.posts ? (
          <div className={styles.sliderContainer}>
            <Swiper>
              {data.posts.map((post) => (
                <Slide>
                  <img className={styles.image} key={post.id} src={post.imageUrl} />
                </Slide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    </Layout>
  );
}
