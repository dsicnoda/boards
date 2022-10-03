import WContainer from "components/wcontainer";
import ImgText from "components/imgtext";

export default function ImgTexts() {
  return (
    <>
      <ImgText
        title="日常のツールたち"
        subtitle="Convenient"
        description="こにでもある、誰でも使ったことがある、普段は存在を意識しないと困るツールたち。日常をちょっと楽しくしてくれます。"
        imgSrc="/img/tool.jpg"
        imgWidth={1600}
        imgHeight={1260}
      />
      <ImgText
        title="効率化の手助け"
        subtitle="Helpful"
        description="さまざまな作業を効率よく進めるためには、目的に応じて最適な道具を使うことが大切です。そんな道具たちが揃っています。"
        imgSrc="/img/helpful.jpg"
        imgWidth={1600}
        imgHeight={1260}
        reverse
      />
    </>
  );
}
