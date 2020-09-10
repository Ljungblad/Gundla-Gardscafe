import groq from 'groq';
import client from '../client';
import Layout from '../components/layout';
import InstagramFeed from '../components/instagramfeed';
import useSWR from 'swr';

const Index = (props) => {
  return (
    <Layout navigationLinks={props.navigationLinks.navigation}>
      <InstagramFeed instagramData={props.instagram} />
    </Layout>
  );
};

// const Index = (props) => {
//   console.log(props);
//   const { data, error } = useSWR('https://api.kanye.rest', fetcher);
//   console.log(data);

//   return <h1>hi</h1>;
// };

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
