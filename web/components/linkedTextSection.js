import styled from "styled-components";

const StyledLinkedTextSection = styled.div`
  width: 100vw;
  padding: 60px 24px 70px 24px;
  background-color: ${({ color }) =>
    color == "white" ? "#fafafa" : "#1c1c1c"};

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3,
  p {
    color: ${({ color }) => (color == "white" ? "#1c1c1c" : "#fafafa")};
  }

  a {
    color: ${({ color }) => (color == "white" ? "#1c1c1c" : "#fafafa")};
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
`;

const LinkedTextSection = (props) => {
  return (
    <StyledLinkedTextSection color={props.color} linkType={props.linkType}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <div className="arrowLinkContainer">
        <a href={props.link}>INSERT ICON HERE --></a>
      </div>
      <div className="textLinkContainer">
        <a href={props.link}>
          <p>LÄS MER</p>
        </a>
      </div>
    </StyledLinkedTextSection>
  );
};

export default LinkedTextSection;
