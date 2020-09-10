import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';

const About = (props, propz) => {
    console.log(propz);
  return <Layout props={props}></Layout>;
};

const query = groq`{
    "navigation": (*[_type == 'navigation']),
  }`;

About.getIntitalProps = async function () {
  const res = await client.fetch(query);

  const resInsta = await fetch(
    'https://www.instagram.com/gundlacafeinsta/?__a=1'
  );
  const InstagramJson = await resInsta.json();

  return {
    props: {
      instagram: InstagramJson,
      navigation: res,
    },
  };
};



export default About;
