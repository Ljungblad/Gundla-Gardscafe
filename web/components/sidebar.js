import styled from 'styled-components';

const StyledSideBar = styled.div`
  height: 100vh;
  width: ${({ open }) => (open ? '100px' : '0px')};
  background: hotpink;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  right: 0;
  overflow: hidden;
  z-index: 0;
  transition: 0.4s;
`;

const SideBar = (props) => {
  return (
    <StyledSideBar open={props.open}>
      <a>Logo</a>
      <a>Home</a>
      <a>Menu</a>
      <a>About</a>
      <a>Cantact</a>
    </StyledSideBar>
  );
};

export default SideBar;
