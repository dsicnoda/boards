import Image from 'next/image';
import styles from 'styles/post.module.css';

export default function Post({
  title,
  description,
  imgSrc,
  imgWidth,
  imgHeight,
}) {
  return (
    <article className={styles.post}>
      <a href="#">
        <figure>
          <Image
            src={imgSrc}
            alt=""
            layout="responsive"
            width={imgWidth}
            height={imgHeight}
          />
        </figure>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </article>
  );
}
