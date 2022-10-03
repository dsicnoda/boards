import styles from 'styles/plans.module.css';
import Heading from 'components/heading';
import WContainer from 'components/wcontainer';
import Plan from 'components/plan';

export default function Plans() {
  return (
    <section className={styles.plans}>
      <WContainer>
        <Heading title="Service plans" subtitle="サービスプラン" />
        <div className={styles.plansContainer}>
          <Plan
            title="Free"
            description="便利なオンラインツールを今すぐご利用いただけるプランです。"
            price="無料"
          />
          <Plan
            title="Standard"
            description="厳選した最新ステーショナリーグッズを毎月お届けするスタンダードプランです。"
            price="980円/月"
            accent
          />
          <Plan
            title="Pro"
            description="プロフェッショナルなツールの貸し出し、工房の利用など、さまざまなご要望にお応えするプランです。"
            price="2,800円/月"
            accent
          />
        </div>
      </WContainer>
    </section>
  );
}
