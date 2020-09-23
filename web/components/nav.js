import styled from 'styled-components';
import Burger from '../components/hamburger';

const StyledNav = styled.nav`
  height: 61px;
  width: 100%;
  background: #919984;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  position: fixed;

  @media (min-width: 992px) {
    display: none;
  }
`;

const Nav = (props) => {
  return (
    <StyledNav>
      <a href='/'>Logo</a>
      <Burger navigationLinks={props.navigationLinks} />
    </StyledNav>
  );
};

export default Nav;
