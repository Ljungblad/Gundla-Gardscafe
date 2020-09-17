import styled from "styled-components";
import Link from "next/link";

const StyledSideBar = styled.div`
  height: 100vh;
  width: ${({ open }) => (open ? "250px" : "0px")};
  background: hotpink;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  right: 0;
  overflow: hidden;
  transition: 0.4s;
  padding: ${({ open }) => (open ? "0px 30px 0px 30px" : "0px")};

  .sideBarLogo {
    margin-top: 85px;
  }

  .navigationLinks {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    margin-top: 65px;

    a {
      height: 60px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000;
    }
  }
`;

const SideBar = (props) => {
  const navigationLinks = props.navigationLinks;

  return (
    <StyledSideBar open={props.open}>
      <a href="/">
        <h3 className="sideBarLogo">LOGO</h3>
      </a>
      <div className="navigationLinks">
        {navigationLinks.map((item, i) => (
          <a href={item.link} key={i}>
            {item.title}
          </a>
        ))}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
