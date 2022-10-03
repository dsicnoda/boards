import Image from "next/image";
import styles from "styles/entry.module.css";
import WContainer from "components/wcontainer";
import HeadingDecoration from "./heading-decoration";

export default function Entry() {
  return (
    <article className={styles.entry}>
      <figure className={styles.entryImg}>
        <Image src="/img/service.jpg" layout="fill" objectFit="cover" alt="" />
      </figure>

      <WContainer narrow>
        <div>
          <HeadingDecoration
            title="サービス案内"
            subtitle="Services"
            emphasize
          />
          <div className={styles.entryContainer}>
            <p>
              身近にあふれるたくさんの文具や事務用品。こうしたステーショナリーは仕事に欠かせないものであると同時に、
              毎日を楽しくしてくれるものであり、クリエイティブを刺激してくれるものでもあります。
            </p>
            <p>
              そして、デジタル化が進んだ現在では、スマートフォンやパソコンの中で
              便利な道具が必要とされるようになってきています。
            </p>
            <h2>サービス展開について</h2>
            <p>
              Boardsではサブスクリプションの形式で、さまざまな道具の提供、販売、
              貸し出しなどのサービスを展開しています。
            </p>
            <ul>
              <li>カレンダー</li>
              <li>電卓</li>
              <li>定規・スケール</li>
            </ul>
            <figure>
              <Image
                src="/img/news05.jpg"
                alt=""
                width={1000}
                height={750}
                priority
              />
            </figure>
            <p>
              主要都市にある工房スペースでは、最新の３Ｄプリンターやレーザーカッター、
              旋盤などの各種工具などもご利用いただけます。
            </p>
            <p>
              もちろん、オンライン上の便利な制作・管理ツールも取り揃えていますので、
              どんどん活用してください。
            </p>
          </div>
        </div>
      </WContainer>
    </article>
  );
}
