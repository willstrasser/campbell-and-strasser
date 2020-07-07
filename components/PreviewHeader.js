import styles from './PreviewHeader.module.css';

export default function PreviewHeader() {
  return (
    <div className={styles.header}>
      In Preview Mode{' '}
      <a className={styles.exitLink} href="/api/exit-preview">
        ⓧ
      </a>
    </div>
  );
}
