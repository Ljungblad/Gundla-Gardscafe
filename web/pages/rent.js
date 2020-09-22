import Layout from "../components/layout";
import groq from "groq";
import client from "../client";
import TextSection from "../components/textSection";
import Image from "../components/image";
import PageHeader from "../components/pageheader";
import urlBuild from "../imageBuilder";

const Rent = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const rentPageData = props.rentData.rent[0];
  console.log(rentPageData);

  // TEXT
  const rentTitle = rentPageData.titleRent;
  const cateringTitle = rentPageData.titleCatering;
  const requestTitle = rentPageData.titleRequest;
  const cateringText = rentPageData.textBlockCatering[0].children[0].text;
  const rentText = rentPageData.textBlockRent[0].children[0].text;
  const requestText = rentPageData.textBlockRequest[0].children[0].text;

  // IMAGES
  const firstImage = urlBuild(rentPageData.firstImage.asset._ref);
  const firstImageAlt = rentPageData.firstImage.alt;
  const secondImage = urlBuild(rentPageData.secondImage.asset._ref);
  const secondImageAlt = rentPageData.secondImage.alt;
  const thirdImage = urlBuild(rentPageData.thirdImage.asset._ref);
  const thirdImageAlt = urlBuild(rentPageData.thirdImage.alt);
  const fourthImage = urlBuild(rentPageData.fourthImage.asset._ref);
  const fourthImageAlt = rentPageData.fourthImage.asset.alt;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader title={rentTitle} text={rentText} />
      <Image url={firstImage} alt={firstImageAlt} />
      <TextSection title={requestTitle} text={requestText} />
      <Image url={secondImage} alt={secondImageAlt} />
      <Image url={thirdImage} alt={thirdImageAlt} />
      <Image url={fourthImage} alt={fourthImageAlt} />
      <TextSection
        title={cateringTitle}
        text={cateringText}
        link="/catering}"
        linkType="arrow"
      />
    </Layout>
  );
};

const query = groq`{
    "rent": *[_type == 'rent'],
    
  }`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { rentData: res },
  };
}

export default Rent;
