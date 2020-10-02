import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: ${(props) => props.width}px;
    padding: 10px;
    color: #000201;
    margin-bottom: 30px;
    height: 40px;
    border-radius: 0px;
    border: none;
  }

  @media (min-width: 992px) {
    width: 50%;

    input {
      color: #4c5340;
    }
  }
`;

const Input = (props) => {
  return (
    <StyledInput width={props.width}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        list={props.list}
        id={props.id}
        required
      />
    </StyledInput>
  );
};

export default Input;
