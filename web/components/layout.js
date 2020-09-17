import Head from "next/head";
import Nav from "../components/nav";
import MenuBtns from "../components/menubtns";
import Footer from "../components/footer";

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>Gundla</title>
        <meta property="og:title" content="Gundla Gårdscafé" key="title" />
      </Head>
      <Nav navigationLinks={props.navigationLinks} />
      <MenuBtns />
      {props.children}
      <Footer footerData={props.footerData} />
    </main>
  );
};

export default Layout;
