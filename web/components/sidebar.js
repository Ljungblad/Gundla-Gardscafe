import styled from 'styled-components';
import Link from 'next/link'

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
  const navigationLinks = props.navigationLinks;

  return (
    <StyledSideBar open={props.open}>
      {navigationLinks.map((item, i) => (
        <a href='#' key={i}>
          {item.title}
        </a>
      ))}
    </StyledSideBar>
  );
};

export default SideBar;
