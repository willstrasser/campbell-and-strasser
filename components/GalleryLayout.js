import classNames from 'classnames';
import {useEffect, useState} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './GalleryLayout.module.css';

export default function GalleryLayout({children, navigation}) {
  const router = useRouter();
  return (
    <>
      <ul className={styles.nav}>
        {navigation.map(({title, slug}) => {
          const classes = classNames({
            [styles.navLink]: true,
            [styles.selected]: router.query.galleryId === slug,
          });
          return (
            <li className={styles.navItem} key={slug}>
              <Link href={`/gallery/${slug}`}>
                <a className={classes}>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      {children}
    </>
  );
}