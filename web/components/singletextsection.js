import styled from "styled-components";

const StyledSingleTextSection = styled.div`
  width: 100vw;
  background-color: ${(props) => props.backgroundColor};
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
    color: ${(props) => props.textColor};
  }

  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #242b18;

    ${(props) =>
      props.hideDesktop === "true" &&
      `
    display: none;
    `}

    .textSectionContainer {
      width: 460px;

      p {
        font-size: 22px;
        line-height: 35px;
        letter-spacing: 2px;
      }
    }
  }
`;

const SingleTextSection = (props) => {
  return (
    <StyledSingleTextSection
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      hideDesktop={props.hideDesktop}
    >
      <div className="textSectionContainer">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </StyledSingleTextSection>
  );
};

export default SingleTextSection;
