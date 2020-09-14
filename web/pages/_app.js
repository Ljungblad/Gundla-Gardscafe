import '../styles/globals.css';
import groq from 'groq';
import client from '../client';

function MyApp({ Component, pageProps, props }) {
  return <Component {...pageProps} globalProps={props.globalProps} />;
}

const query = groq`{
    "navigation": (*[_type == 'navigation']),
    "footer": (*[_type == 'footer']),
  }`;

MyApp.getInitialProps = async () => {
  const res = await client.fetch(query);

  return {
    props: { globalProps: res },
  };
};

export default MyApp;
