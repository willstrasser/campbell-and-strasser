import {useEffect, useState} from 'react';
import userInstagram from 'user-instagram';

import Layout from 'components/Layout';

export default function InstagramImages({handle}) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await userInstagram(handle);
      setData(result);
    };

    fetchData();
  }, []);
  if (!data.posts) {
    return null;
  }
  return (
    <>
      {data.posts.map((post) => (
        <img key={post.id} src={post.imageUrl} />
      ))}
    </>
  );
}
