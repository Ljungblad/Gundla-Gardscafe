import styled from "styled-components";

const StyledPageHeader = styled.div`
  padding: 30px 24px 50px 24px;

  h1 {
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 3px;
  }

  p {
    letter-spacing: 1px;
    line-height: 22px;
  }

  @media (min-width: 992px) {
    width: 100%;
    padding: 100px 24px 100px 115px;
    letter-spacing: 1px;
    line-height: 24px;

    h1 {
      letter-spacing: 1px;
    }

    .headerTextContainer {
      max-width: 450px;
    }
  }
`;

const PageHeader = (props) => {
  return (
    <StyledPageHeader>
      <h1>{props.title}</h1>
      <div className="headerTextContainer">
        <p>{props.text}</p>
      </div>
    </StyledPageHeader>
  );
};

export default PageHeader;
