import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';

const About = (props) => {
  return <Layout navigationLinks={props.navigationLinks.navigation}></Layout>;
};
const query = groq`{
    "navigation": (*[_type == 'navigation']),
  }`;

export async function getStaticProps(context) {
  const res = await client.fetch(query);

  return {
    props: { navigationLinks: res },
  };
}

export default About;
