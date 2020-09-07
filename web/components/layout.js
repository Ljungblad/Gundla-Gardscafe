import Head from 'next/head';

const Layout = (props) => (
  <main>
    <Head>
      <title>{props.title || 'Gundla Gårdscafé'}</title>
      <meta
        property='og:title'
        content={props.title || 'Gundla Gårdscafé'}
        key='title'
      />
    </Head>
  </main>
);

export default Layout;
