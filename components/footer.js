import Logo from 'components/logo';
import Sns from 'components/sns';
import Menu from 'components/menu';
import Copyright from 'components/copyright';
import styles from 'styles/footer.module.css';
import WContainer from 'components/wcontainer';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WContainer>
        <div className={styles.footerContainer}>
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="footer-sns">
            <Sns />
          </div>
          <Menu />
          <Copyright />
        </div>
      </WContainer>
    </footer>
  );
}
