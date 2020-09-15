import '../styles/globals.css';
import groq from 'groq';
import client from '../client';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, props }) {
  // ! This helps with the "classNames dont match" error
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

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
