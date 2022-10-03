import Logo from "components/logo";
import Nav from "components/nav";
import styles from "styles/header.module.css";
import WContainer from "components/wcontainer";

export default function Header() {
  return (
    <header className={styles.header}>
      <WContainer>
        <div className={styles.headerContainer}>
          <Logo />
          <Nav />
        </div>
      </WContainer>
    </header>
  );
}
