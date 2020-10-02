import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import PageHeader from "../components/pageheader";
import Image from "../components/image";
import TextSection from "../components/textSection";

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
      <Image url={headerImg} alt={headerAltText} width="50%" />
      <TextSection
        title={titleRequest}
        text={requestEmail}
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="50%"
        align="center"
      />
      <Image
        url={secondImg}
        alt={secondAltText}
        width="40%"
        paddingDesktop="10px 10px 0px 0px"
        paddingMobile="0px 0px 10px 0px"
      />
      <Image
        url={thirdImg}
        alt={thirdAltText}
        width="60%"
        paddingDesktop="10px 0px 0px 0px"
        paddingMobile="0px 0px 10px 0px"
      />
      <Image
        url={fourthImg}
        alt={fourthAltText}
        width="100%"
        paddingDesktop="10px 0px 0px 0px"
      />
      <TextSection
        title={titleRent}
        text={rentTextBlock}
        link="/rent"
        linkType="arrow"
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="100%"
        height="280px"
        align="left"
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
