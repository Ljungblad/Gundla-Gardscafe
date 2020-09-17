import styled from "styled-components";

const StyledBtn = styled.button`
  width: 100px;
  height: 70px;
  border: none;
  background: none;

  a {
    text-decoration: none;
  }

  p {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ inverted }) => (inverted ? "#000" : "#FFF")};
    color: ${({ inverted }) => (inverted ? "#FFF" : "#000")};
  }
`;

const MenuBtn = (props) => {
  return (
    <StyledBtn inverted={props.isActive} onClick={props.onClick}>
      <a href={props.link}>
        <p>{props.text}</p>
      </a>
    </StyledBtn>
  );
};

export default MenuBtn;
