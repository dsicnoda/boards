import styles from 'styles/heading-decoration.module.css';

export default function HeadingDecoration({
  title,
  subtitle,
  emphasize = false,
}) {
  return (
    <>
      <h2
        className={styles.headingDecoration}
        style={emphasize ? { fontSize: 'clamp(30px, 6.25vw, 48px)' } : {}}
      >
        {title}
      </h2>
      <p>{subtitle}</p>
    </>
  );
}
