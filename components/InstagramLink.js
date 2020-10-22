import classNames from 'classnames';

import styles from './InstagramLink.module.css';

export default function InstagramLink({isAbsolute, isBlack}) {
  return (
    <a
      className={classNames(styles.igLink, {
        [styles.igLink_black]: isBlack,
        [styles.igLink_absolute]: isAbsolute,
      })}
      target="_blank"
      href="https://instagram.com/campbellandstrasser"
    >
      <img description="Follow us on instagram" src="/ig.svg" />
    </a>
  );
}
