import Head from 'next/head';
import Nav from '../components/nav';
import styled from 'styled-components';
import MenuBtns from '../components/menubtns';

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>{props.title || 'Gundla Gårdscafé'}</title>
        <meta
          property='og:title'
          content={props.title || 'Gundla Gårdscafé'}
          key='title'
        />
      </Head>
      <Nav></Nav>
      <MenuBtns />
    </main>
  );
};

export default Layout;
