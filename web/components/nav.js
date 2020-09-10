import styled from 'styled-components';
import Burger from '../components/hamburger';

const StyledNav = styled.nav`
  height: 61px;
  background: grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: relative;
`;

const Nav = (props) => {
  const navigationLinks = props.props.navigation;

  return (
    <StyledNav>
      <a>Logo</a>
      <Burger props={navigationLinks} />
    </StyledNav>
  );
};

export default Nav;
