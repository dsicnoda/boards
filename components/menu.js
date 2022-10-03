import Link from "next/link";
import styles from "styles/menu.module.css";

export default function Menu() {
  return (
    <ul className={styles.menu}>
      <li><a href="#">会社概要</a></li>
      <li><a href="#">特定商取引法</a></li>
      <li><a href="#">個人情報の取り扱い</a></li>
      <li>
        <Link href="/content">
          <a>サービス案内</a>
        </Link>
      </li>
      <li><a href="#">お問い合せ</a></li>
    </ul>
  );
}
