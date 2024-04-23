import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './GalleryLayout.module.css';

export default function GalleryLayout({children, navigation}) {
  const router = useRouter();
  return <>
    <ul className={styles.nav}>
      {navigation.map(({title, slug}) => {
        const classes = classNames({
          [styles.navLink]: true,
          [styles.selected]: router.query.galleryId === slug,
        });
        return (
          <li className={styles.navItem} key={slug}>
            <Link className={classes} href={`/gallery/${slug}`} legacyBehavior>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
    {children}
  </>;
}
