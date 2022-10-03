import styles from "styles/heading.module.css";

export default function Heading({ title, subtitle }) {
  return (
    <h2 className={styles.heading}>
      {title}
      <span>{subtitle}</span>
    </h2>
  );
}
