import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';
import TextSection from '../components/textSection';
import LinkedTextSection from '../components/linkedTextSection';
import Image from '../components/image';
import PageHeader from '../components/pageheader';
import urlBuild from '../imageBuilder';

const About = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const aboutPageData = props.aboutData.about[0];

  //IMAGES
  const firstImage = urlBuild(aboutPageData.firstImage.asset._ref);
  const secondImage = urlBuild(aboutPageData.secondImage.asset._ref);

  console.log(aboutPageData);

  //TEXTS
  const pageDesc = aboutPageData.textBlockAbout[0].children[0].text;
  const backgroundText = aboutPageData.textBlockBackground[0].children[0].text;
  const welcomeText = aboutPageData.textBlockWelcome[0].children[0].text;
  const eventText = aboutPageData.textBlockEvent[0].children[0].text;
  const pageTitle = aboutPageData.titleAbout;
  const titleBackground = aboutPageData.titleBackground;
  const titleEvent = aboutPageData.titleEvent;
  const titleWelcome = aboutPageData.titleWelcome;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader title={pageTitle} text={pageDesc} />
      <Image url={firstImage} alt='e' />
      <TextSection title={titleBackground} text={backgroundText} />
      <Image url={secondImage} alt='e' />
      <LinkedTextSection title={titleEvent} text={eventText} />
      <TextSection title={titleWelcome} text={welcomeText} />
    </Layout>
  );
};

const query = groq`{
    "about": *[_type == 'about'],
    
  }`;

export async function getStaticProps(context) {
  const res = await client.fetch(query);

  return {
    props: { aboutData: res },
  };
}

export default About;
