import styles from 'styles/wcontainer.module.css';

export default function WContainer({ children, narrow = false }) {
  return (
    <div
      className={styles.wContainer}
      style={narrow ? { maxWidth: '720px' } : {}}
    >
      {children}
    </div>
  );
}
