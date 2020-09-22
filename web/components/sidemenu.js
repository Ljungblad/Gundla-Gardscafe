import styled from "styled-components";
import SideBar from "../components/sidebar";
import FooterDesktop from "../components/footerdesktop";

const StyledSideMenu = styled.div`
  display: none;

  @media (min-width: 992px) {
    display: block;
    width: 260px;
    height: 100vh;
    background-color: grey;
    position: fixed;
  }
`;

const SideMenu = (props) => {
  return (
    <StyledSideMenu>
      <SideBar navigationLinks={props.navigationLinks} />
      <FooterDesktop footerData={props.footerData} />
    </StyledSideMenu>
  );
};

export default SideMenu;
