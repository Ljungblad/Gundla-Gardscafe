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
  transition: 0.4s;
`;

const SideBar = (props) => {
  const navigationLinks = props.props;
  console.log(navigationLinks);

  return (
    <StyledSideBar open={props.open}>
      {navigationLinks.map((item, i) => (
        <a href='#' key={i}>
          {navigationLinks[i].title}
        </a>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
