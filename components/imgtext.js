import Image from "next/image";
import styles from "styles/imgtext.module.css";
import WContainer from "components/wcontainer";
import HeadingDecoration from "components/heading-decoration";

export default function ImgText({
  title,
  subtitle,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
  reverse = false,
}) {
  return (
    <section className={styles.imgtext}>
      <WContainer>
        <div
          className={styles.imgtextContainer}
          style={reverse ? { flexDirection: "row-reverse" } : {}}
        >
          <div className="text">
            <HeadingDecoration title={title} subtitle={subtitle} />
            <p>{description}</p>
          </div>
          <figure className="img">
            <Image
              src={imgSrc}
              alt=""
              layout="responsive"
              width={imgWidth}
              height={imgHeight}
            />
          </figure>
        </div>
      </WContainer>
    </section>
  );
}
