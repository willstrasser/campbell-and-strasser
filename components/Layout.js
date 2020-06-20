import Head from 'next/head';
import Navigation from 'components/Navigation';

import styles from './Layout.module.css';

export default function Layout({children}) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Campbell & Strasser</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      {children}
    </div>
  );
}
