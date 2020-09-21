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
      <Image url={firstImage} alt={firstImageAlt} />
      <TextSection title={backgroundTitle} text={backgroundText} />
      <Image url={secondImage} alt={secondImageAlt} />
      <TextSection title={eventTitle} text={eventText} />
      <TextSection title={welcomeTitle} text={welcomeText} />
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
