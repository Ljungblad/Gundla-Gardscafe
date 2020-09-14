import styled from 'styled-components';

const StyledLinkedTextSection = styled.div`
  width: 100vw;
  background-color: black;
  padding: 60px 24px 70px 24px;

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3,
  p {
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const LinkedTextSection = (props) => {
  return (
    <StyledLinkedTextSection>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <a href={props.link}>INSERT ICON HERE --></a>
    </StyledLinkedTextSection>
  );
};

export default LinkedTextSection;
