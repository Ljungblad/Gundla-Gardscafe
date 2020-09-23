import Head from "next/head";
import Nav from "../components/nav";
import MenuBtns from "../components/menubtns";
import Footer from "../components/footer";
import SideMenu from "../components/sidemenu";
import styled from "styled-components";
import Copyright from "../components/copyright";

const StyledPageWrapper = styled.div`
  @media (min-width: 992px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 260px;

    .eventSection {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      background: #f3f1e7;
    }
  }
`;

const Layout = (props) => {
  return (
    <main>
      <Head>
        <title>Gundla</title>
        <meta property="og:title" content="Gundla Gårdscafé" key="title" />
      </Head>
      <Nav navigationLinks={props.navigationLinks} />
      <MenuBtns />
      <SideMenu
        navigationLinks={props.navigationLinks}
        footerData={props.footerData}
      />
      <StyledPageWrapper>
        {props.children}
        <Copyright footerData={props.footerData} />
      </StyledPageWrapper>
      <Footer footerData={props.footerData} />
    </main>
  );
};

export default Layout;
