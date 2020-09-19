import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import PageHeader from "../components/pageHeader";
import Image from "../components/image";
import TextSection from "../components/textSection";
import LinkedTextSection from "../components/linkedTextSection";

const CateringPage = (props) => {
  //GLOBAL PROPS
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;

  //TEXT
  const pageTitle = props.content.catering[0].titleCatering;
  const headerTextBlock =
    props.content.catering[0].textBlockCatering[0].children[0].text;
  const titleRequest = props.content.catering[0].titleRequest;
  const requestEmail = props.content.catering[0].requestEmail;
  const titleRent = props.content.catering[0].titleRequest;
  const rentTextBlock =
    props.content.catering[0].textBlockRent[0].children[0].text;

  //IMAGES
  const headerImg = urlBuild(props.content.catering[0].firstImage.asset._ref);
  const headerAltText = props.content.catering[0].firstImage.alt;
  const secondImg = urlBuild(props.content.catering[0].secondImage.asset._ref);
  const secondAltText = props.content.catering[0].secondImage.alt;
  const thirdImg = urlBuild(props.content.catering[0].thirdImage.asset._ref);
  const thirdAltText = props.content.catering[0].thirdImage.alt;
  const fourthImg = urlBuild(props.content.catering[0].fourthImage.asset._ref);
  const fourthAltText = props.content.catering[0].fourthImage.alt;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader title={pageTitle} text={headerTextBlock} />
      <Image url={headerImg} alt={headerAltText} />
      <TextSection title={titleRequest} text={requestEmail} />
      <Image url={secondImg} alt={secondAltText} />
      <Image url={thirdImg} alt={thirdAltText} />
      <Image url={fourthImg} alt={fourthAltText} />
      <LinkedTextSection
        title={titleRent}
        text={rentTextBlock}
        link="/rent"
        color="black"
        linkType="arrow"
      />
    </Layout>
  );
};

const query = groq`{
    "catering": (*[_type == 'catering']),
}`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { content: res },
  };
}

export default CateringPage;
