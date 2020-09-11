import groq from 'groq';
import client from '../client';
import Layout from '../components/layout';
import InstagramFeed from '../components/instagramfeed';

const Index = (props) => {
  console.log(props.navigation.navigationLinks.navigation);
  return (
    <Layout navigationLinks={props.navigation.navigationLinks.navigation}>
      <InstagramFeed instagramData={props.instagram} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const resInsta = await fetch(
    'https://www.instagram.com/gundlacafeinsta/?__a=1'
  );
  const InstagramJson = await resInsta.json();

  return {
    props: { instagram: InstagramJson }, // will be passed to the page component as props
  };
}

export default Index;
