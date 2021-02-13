import Head from 'next/head';
import Navigation from './Navigation';
import PreviewHeader from './PreviewHeader';

import styles from './Layout.module.css';
import {motion} from 'framer-motion';

let easing = [0.175, 0.85, 0.42, 0.96];
const bodyVariant = {
  initial: {opacity: 0},
  exit: {opacity: 0, transition: {duration: 0.5, ease: easing}},
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

export default function Layout({preview, children}) {
  return (
    <div className={styles.layout}>
      {preview && <PreviewHeader />}
      <Head>
        <title>Campbell & Strasser</title>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Navigation />
      <motion.div
        className={styles.page}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={bodyVariant}
      >
        {children}
      </motion.div>
    </div>
  );
}

export const Intro = ({children}) => <div className={styles.intro}>{children}</div>;
export const Section = ({children}) => <div className={styles.section}>{children}</div>;
export const Subnav = ({children}) => <div className={styles.subnav}>{children}</div>;
export const Images = ({children}) => <div className={styles.images}>{children}</div>;
