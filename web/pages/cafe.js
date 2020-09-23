import groq from 'groq';
import client from '../client';
import urlBuild from '../imageBuilder';
import Layout from '../components/layout';
import PageHeader from '../components/pageheader';
import TextSection from '../components/textSection';
import Image from '../components/image';

const CafePage = (props) => {
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
      <PageHeader title={pageTitle} text={headerTextBlock} />
      <Image url={headerImg} alt={headerAltText} width='50%' />
      <TextSection
        title={menuTitle}
        text={menuText}
        width='50'
        align='left'
        backgroundColor='#F3F1E7'
      />
      <Image
        url={secondImg}
        alt={secondAltText}
        width='45%'
        paddingDesktop='10px 10px 0px 0px'
        paddingMobile='0px 0px 10px 0px'
      />
      <Image
        url={thirdImg}
        alt={thirdAltText}
        width='55%'
        paddingDesktop='10px 0px 0px 0px'
        paddingMobile='0px 0px 10px 0px'
      />
      <Image
        url={fourthImg}
        alt={fourthAltText}
        width='100%'
        paddingDesktop='10px 0px 0px 0px'
      />
      <TextSection
        title={cateringTitle}
        text={cateringText}
        link='/catering'
        textColor='#FFF'
        align='left'
        linkType='arrow'
        backgroundColor='#C05B3D'
        width='100'
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
