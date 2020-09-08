import styled from 'styled-components';

const StyledBtn = styled.button`
  width: 100px;
  height: 30px;
  background: ${({ inverted }) => (inverted ? '#000' : '#FFF')};
  color: ${({ inverted }) => (inverted ? '#FFF' : '#000')};
  border: none;
`;

const MenuBtn = (props) => {
  return (
    <StyledBtn inverted={props.isActive} onClick={props.onClick}>
      {props.text}
    </StyledBtn>
  );
};

export default MenuBtn;
