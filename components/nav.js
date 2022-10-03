import { useState } from 'react';
import Link from 'next/link';
import styles from 'styles/nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <div className={navIsOpen ? styles.open : styles.close}>
      <button className={styles.navbtn} onClick={toggleNav}>
        {navIsOpen || <FontAwesomeIcon icon={faBars} />}
        {navIsOpen && <FontAwesomeIcon icon={faTimes} />}
        <span className="sr-only">MENU</span>
      </button>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/">
              <a onClick={closeNav}>ホーム</a>
            </Link>
          </li>
          <li>
            <Link href="/content">
              <a onClick={closeNav}>サービス案内</a>
            </Link>
          </li>
          <li>
            <a href="#" onClick={closeNav}>
              お問い合せ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
