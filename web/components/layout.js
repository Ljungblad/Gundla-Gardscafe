import Head from "next/head";
import Nav from "../components/nav";
import styled from "styled-components";
import MenuBtns from '../components/menubtns';
import InstagramFeed from "../components/instagramfeed";

const Layout = (props) => (
  <main>
    <Head>
      <title>{props.title || "Gundla Gårdscafé"}</title>
      <meta
        property="og:title"
        content={props.title || "Gundla Gårdscafé"}
        key="title"
      />
    </Head>
    <Nav></Nav>
  <MenuBtns />
    <InstagramFeed instagramData={props.instagramData} />
  </main>
);

export default Layout;
