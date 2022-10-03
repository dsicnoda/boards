import styles from "styles/plan.module.css";

export default function Plan({ title, description, price, accent = false }) {
  return (
    <div className={styles.plan}>
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <p className="price">{price}</p>
      <a
        href="#"
        className="btn"
        style={accent ? { backgroundColor: "#b72661" } : {}}
      >
        使ってみる
      </a>
    </div>
  );
}
