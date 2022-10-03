import styles from 'styles/hero.module.css';
import WContainer from 'components/wcontainer';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <WContainer>
        <div className={styles.heroContainer}>
          <h1>Stationery Service</h1>
          <p>便利な道具とサービスをお届けします</p>
          <a href="#" className="btn">
            無料で始める
          </a>
        </div>
      </WContainer>
    </section>
  );
}
