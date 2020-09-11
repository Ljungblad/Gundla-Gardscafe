import '../styles/globals.css';
import groq from 'groq';
import client from '../client';

function MyApp({ Component, pageProps, props }) {
  return <Component {...pageProps} navigation={props} />;
}

const query = groq`{
    "navigation": (*[_type == 'navigation']),
  }`;

MyApp.getInitialProps = async () => {
  const res = await client.fetch(query);

  return {
    props: { navigationLinks: res },
  };
};

export default MyApp;
