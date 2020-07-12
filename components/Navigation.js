import classNames from 'classnames';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './Navigation.module.css';

const pages = [
  {slug: '', title: 'Campbell & Strasser'},
  {slug: 'the-shop', title: 'The Shop'},
  {slug: 'capabilities', title: 'Capabilities'},
  {slug: 'gallery', title: 'Gallery'},
  {slug: 'contact', title: 'Contact'},
];
function Navigation() {
  const router = useRouter();
  return (
    <ul className={styles.nav}>
      {pages.map((p) => {
        const classes = classNames({
          [styles.navLink]: true,
          [styles.selected]: router.route.slice(1).startsWith(p.slug),
        });
        return (
          <li className={styles.navItem} key={p.slug}>
            <Link href={`/${p.slug}`}>
              <a className={classes}>{p.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Navigation;
