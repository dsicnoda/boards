import styles from "styles/posts.module.css";
import WContainer from "components/wcontainer";
import Post from "components/post";
import Heading from "./heading";

export default function Posts() {
  return (
    <section className={styles.posts}>
      <WContainer>
        <Heading title="News Releases" subtitle="最新情報" />
        <div className={styles.postsContainer}>
          <Post
            title="スパンコール"
            description="キラキラと光を反射する装飾素材です。いつもの道具にアクセントをつけます。"
            imgSrc="/img/news01.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
          <Post
            title="卓上ランタン"
            description="手元に灯りが欲しいときに、便利でかわいい卓上ランタンです。"
            imgSrc="/img/news02.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
          <Post
            title="冊子印刷"
            description="スタンダードプランにも手軽な冊子印刷が登場しました。"
            imgSrc="/img/news03.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
          <Post
            title="マグネット"
            description="メモやアイデアを貼り出しておくなら、かわいいマグネットがおすすめです。"
            imgSrc="/img/news04.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
          <Post
            title="ビジネスノート"
            description="書き心地や開きやすさにこだわった、ビジネス用のノートたちを紹介します。"
            imgSrc="/img/news05.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
          <Post
            title="ボールペン"
            description="スタイリッシュなボールペンで仕事環境の雰囲気を変えてみました。"
            imgSrc="/img/news06.jpg"
            imgWidth={1000}
            imgHeight={750}
          />
        </div>
      </WContainer>
    </section>
  );
}
