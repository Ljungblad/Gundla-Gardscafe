import styled from 'styled-components';

const StyledBtn = styled.button`
  width: 100px;
  height: 70px;
  border: none;
  background: none;

  p {
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ inverted }) => (inverted ? '#000' : '#FFF')};
    color: ${({ inverted }) => (inverted ? '#FFF' : '#000')};
  }
`;

const MenuBtn = (props) => {
  return (
    <StyledBtn inverted={props.isActive} onClick={props.onClick}>
      <p>{props.text}</p>
    </StyledBtn>
  );
};

export default MenuBtn;
