import styled from 'styled-components';
import SideBar from '../components/sidebar';

const StyledNav = styled.nav`
  height: 61px;
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: relative;

  a {
    color: red;
    z-index: 1;
  }
`;

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <StyledNav>
      <a>Logo</a>
      <a onClick={() => setOpen(!open)}>Menu</a>
      <SideBar open={open}></SideBar>
    </StyledNav>
  );
};

export default Nav;
