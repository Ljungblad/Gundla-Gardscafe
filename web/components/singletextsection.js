import styled from "styled-components";

const StyledSingleTextSection = styled.div`
  width: 100vw;
  background-color: white;
  padding: 60px 24px 70px 24px;

  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    font-size: 20px;
    font-style: italic;
  }

  h3,
  p {
    color: black;
  }

  @media (min-width: 992px) {
    width: 100%;
  }
`;

const SingleTextSection = (props) => {
  return (
    <StyledSingleTextSection>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </StyledSingleTextSection>
  );
};

export default SingleTextSection;
