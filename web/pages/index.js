import groq from 'groq';
import client from '../client';
import Layout from '../components/layout';
import InstagramFeed from '../components/instagramfeed';

const Index = (props) => {
  return (
    <Layout props={props}>
      <InstagramFeed instagramData={props.props.instagram} />
    </Layout>
  );
};

const query = groq`{
    "navigation": (*[_type == 'navigation']),
  }`;

Index.getInitialProps = async function () {
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

export default Index;
