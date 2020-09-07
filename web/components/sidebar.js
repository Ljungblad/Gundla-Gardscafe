import styled from "styled-components";

const StyledSideBar = styled.div`
  height: 100vh;
  width: ${(props) => (props.hidden === "hidden" ? "100px" : "0px")};
  background: hotpink;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 0;
  overflow: hidden;
`;

const SideBar = (props) => {
  console.log(props.hidden);

  return (
    <StyledSideBar>
      <a>Logo</a>
      <a>Home</a>
      <a>Menu</a>
      <a>About</a>
      <a>Cantact</a>
    </StyledSideBar>
  );
};

export default SideBar;
