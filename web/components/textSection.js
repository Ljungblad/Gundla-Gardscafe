import styled from "styled-components";

const StyledTextSection = styled.div`
  padding: 60px 24px 60px 24px;
  background-color: ${(props) => props.backgroundColor};

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3,
  p {
    color: ${(props) => props.textColor};
  }

  a {
    color: ${(props) => props.textColor};
  }

  .arrowLinkContainer {
    width: 100%;
    margin-top: 20px;
    display: ${({ linkType }) => (linkType == "arrow" ? "block" : "none")};
  }

  .arrowLinkContainer a {
    text-decoration: none;
  }

  .textLinkContainer {
    display: ${({ linkType }) => (linkType == "text" ? "block" : "none")};
    margin-top: 20px;
    width: 100%;
  }

  .textLinkContainer a {
    display: flex;
    justify-content: flex-end;
  }

  @media (min-width: 992px) {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
    display: flex;

    ${(props) =>
      props.align === "center" &&
      `
    justify-content: center;
    align-items: center;
    .textContainer {
      width: 330px;
    }
    `}

    ${(props) =>
      props.align === "left" &&
      `
    justify-content: flex-start;
    align-items: center;
    padding-left: 135px;
    .textContainer {
      width: 350px;
    }
    `}
  }
`;

const TextSection = (props) => {
  return (
    <StyledTextSection
      backgroundColor={props.backgroundColor}
      textColor={props.textColor}
      linkType={props.linkType}
      width={props.width}
      height={props.height}
      align={props.align}
    >
      <div className="textContainer">
        <h3>{props.title || "Title"}</h3>
        <p>{props.text || "Text"}</p>
        <div className="arrowLinkContainer">
          <a href={props.link}>INSERT ICON HERE --></a>
        </div>
        <div className="textLinkContainer">
          <a href={props.link}>
            <p>LÄS MER</p>
          </a>
        </div>
      </div>
    </StyledTextSection>
  );
};

export default TextSection;
