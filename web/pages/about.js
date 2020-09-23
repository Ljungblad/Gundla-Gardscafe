import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';
import TextSection from '../components/textSection';
import Image from '../components/image';
import PageHeader from '../components/pageheader';
import urlBuild from '../imageBuilder';

const About = (props) => {
  // GLOBAL PROPS
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const aboutPageData = props.aboutData.about[0];

  //IMAGES
  const firstImage = urlBuild(aboutPageData.firstImage.asset._ref);
  const secondImage = urlBuild(aboutPageData.secondImage.asset._ref);
  const firstImageAlt = aboutPageData.firstImage.alt;
  const secondImageAlt = aboutPageData.secondImage.alt;

  //TEXTS
  const pageTitle = aboutPageData.titleAbout;
  const pageDesc = aboutPageData.textBlockAbout[0].children[0].text;
  const backgroundTitle = aboutPageData.titleBackground;
  const backgroundText = aboutPageData.textBlockBackground[0].children[0].text;
  const eventTitle = aboutPageData.titleEvent;
  const eventText = aboutPageData.textBlockEvent[0].children[0].text;
  const welcomeTitle = aboutPageData.titleWelcome;
  const welcomeText = aboutPageData.textBlockWelcome[0].children[0].text;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader title={pageTitle} text={pageDesc} />
      <Image url={firstImage} alt={firstImageAlt} width='100%' />
      <TextSection
        title={backgroundTitle}
        text={backgroundText}
        width='100'
        align='left'
      />
      <Image url={secondImage} alt={secondImageAlt} width='450px' height="450px" marginMobile="0px 0px 20px 100px"/>
      <TextSection title={welcomeTitle} text={welcomeText} align="left"/>
      <TextSection
        title={eventTitle}
        text={eventText}
        width='100'
        align='left'
        backgroundColor='#C05B3D'
        textColor='#FFF'
      />
    </Layout>
  );
};

const query = groq`{
    "about": *[_type == 'about'],
    
  }`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { aboutData: res },
  };
}

export default About;
