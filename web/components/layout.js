import Head from 'next/head';
import Nav from '../components/nav';
import MenuBtns from '../components/menubtns';

const Layout = ({ children, props }) => {
  console.log(props);
  return (
    <main>
      <Head>
        <title>'Gundla'</title>
        <meta property='og:title' content='Gundla Gårdscafé' key='title' />
      </Head>
      <Nav props={props.props.navigation} />
      <MenuBtns />
      {children}
    </main>
  );
};

export default Layout;
