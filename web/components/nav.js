import styled from "styled-components";
import SideBar from "../components/sidebar";

const StyledNav = styled.nav`
  height: 50px;
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: relative;
`;

const Nav = () => {
  const [isHidden, setIsHidden] = React.useState("");

  const toggleHideMenu = () => {
    const updatedMenu = isHidden === "hidden" ? "" : "hidden";
    setIsHidden(updatedMenu);
  };

  return (
    <StyledNav>
      <a>Logo</a>
      <a>Map</a>
      <a onClick={toggleHideMenu}>Menu</a>
      <SideBar hidden={isHidden}></SideBar>
    </StyledNav>
  );
};

export default Nav;
