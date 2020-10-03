import Head from 'next/head';
import Navigation from './Navigation';
import PreviewHeader from './PreviewHeader';

import styles from './Layout.module.css';

export default function Layout({preview, children}) {
  return (
    <div className={styles.layout}>
      {preview && <PreviewHeader />}
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

export const Intro = ({children}) => <div className={styles.intro}>{children}</div>;
export const Section = ({children}) => <div className={styles.section}>{children}</div>;
export const Subnav = ({children}) => <div className={styles.subnav}>{children}</div>;
