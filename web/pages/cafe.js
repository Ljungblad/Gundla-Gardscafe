import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import TextSection from "../components/textSection";
import LinkedTextSection from "../components/linkedTextSection";
import Image from "../components/image";

const CafePage = (props) => {
  console.log(props.content.cafe[0]);

  //GLOBAL PROPS
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;

  //TEXT
  const pageTitle = props.content.cafe[0].titleCafe;
  const headerTextBlock =
    props.content.cafe[0].textBlockHero[0].children[0].text;
  const menuTitle = props.content.cafe[0].titleMenu;
  const menuText = props.content.cafe[0].textBlockMenu[0].children[0].text;
  const cateringText =
    props.content.cafe[0].textBlockCatering[0].children[0].text;
  const cateringTitle = props.content.cafe[0].titleCatering;

  //IMAGES
  const headerImg = urlBuild(props.content.cafe[0].firstImage.asset._ref);
  const headerAltText = props.content.cafe[0].firstImage.alt;
  const secondImg = urlBuild(props.content.cafe[0].secondImage.asset._ref);
  const secondAltText = props.content.cafe[0].secondImage.alt;
  const thirdImg = urlBuild(props.content.cafe[0].thirdImage.asset._ref);
  const thirdAltText = props.content.cafe[0].thirdImage.alt;
  const fourthImg = urlBuild(props.content.cafe[0].fourthImage.asset._ref);
  const fourthAltText = props.content.cafe[0].fourthImage.alt;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader
        title={pageTitle || "Titel"}
        text={headerTextBlock || "Text"}
      />
      <Image url={headerImg} alt={headerAltText} />
      <TextSection title={menuTitle || "Titel"} text={menuText || "Text"} />
      <Image url={secondImg} alt={secondAltText} />
      <Image url={thirdImg} alt={thirdAltText} />
      <Image url={fourthImg} alt={fourthAltText} />
      <LinkedTextSection
        title={cateringTitle || "Titel"}
        text={cateringText || "Text"}
        link="/catering"
      />
    </Layout>
  );
};

const query = groq`{
    "cafe": (*[_type == 'cafe']),
}`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { content: res },
  };
}

export default CafePage;
