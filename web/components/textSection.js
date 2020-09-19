import styled from 'styled-components';

const StyledTextSection = styled.div`
  background-color: grey;
  padding: 60px 24px 60px 24px;

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3,
  p {
    color: white;
  }
`;

const TextSection = (props) => {
  return (
    <StyledTextSection>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </StyledTextSection>
  );
};

export default TextSection;
