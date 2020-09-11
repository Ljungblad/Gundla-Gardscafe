import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';

const About = (props) => {
  return (
    <Layout
      navigationLinks={props.navigation.navigationLinks.navigation}
    ></Layout>
  );
};

export default About;
