import groq from 'groq';
import client from '../client';
import Layout from '../components/layout';
import InstagramFeed from '../components/instagramfeed';

const Index = (props) => {
  return (
    <Layout navigationLinks={props.navigationLinks.navigation}>
      <InstagramFeed instagramData={props.instagram} />
    </Layout>
  );
};

const query = groq`{
    "navigation": (*[_type == 'navigation']),
  }`;

export async function getStaticProps(context) {
  const res = await client.fetch(query);
  const resInsta = await fetch(
    'https://www.instagram.com/gundlacafeinsta/?__a=1'
  );
  const InstagramJson = await resInsta.json();

  return {
    props: { instagram: InstagramJson, navigationLinks: res }, // will be passed to the page component as props
  };
}

export default Index;
