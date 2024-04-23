import classNames from 'classnames';
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

import styles from './Navigation.module.css';

let pages = [
  {slug: '', title: 'Campbell & Strasser', inSplash: true},
  {slug: 'the-shop', title: 'The Shop', inSplash: false},
  {slug: 'gallery', title: 'Projects', inSplash: false},
  {slug: 'contact', title: 'Contact', inSplash: true},
];
function Navigation({preview}) {
  if (
    !preview &&
    typeof window !== 'undefined' &&
    (window.location.hostname.includes('campbellandstrasser') ||
      window.location.hostname.includes('localhost'))
  ) {
    pages = pages.filter((page) => page.inSplash);
  }
  const [open, setOpen] = useState(false);
  function renderLinks() {
    return pages.slice(1).map((p) => {
      const classes = classNames({
        [styles.navLink]: true,
        [styles.selected]: router.route.slice(1).startsWith(p.slug),
      });
      return (
        <li className={styles.navItem} key={p.slug}>
          <Link className={classes} href={`/${p.slug}`}>
            {p.title}
          </Link>
        </li>
      );
    });
  }
  const router = useRouter();
  return (
    <>
      <ul className={styles.nav}>
        <li className={classNames(styles.navItem, styles.logoItem)} key={pages[0].slug}>
          <Link
            className={classNames(styles.navLink, styles.logo)}
            href={`/${pages[0].slug}`}
          >
            {pages[0].title}
          </Link>
        </li>
        {renderLinks()}
      </ul>
      <ul className={classNames(styles.mobileNav, {[styles.open]: open})}>
        {renderLinks()}
      </ul>
      <div
        onClick={() => setOpen(!open)}
        className={classNames(styles.navToggle, {[styles.active]: open})}
      >
        <i></i>
        <i></i>
        <i></i>
      </div>
    </>
  );
}

export default Navigation;
