import styled from "styled-components";

const StyledPageHeader = styled.div`
  width: 100vw;
  background-color: grey;
  padding: 24px;

  h1 {
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const PageHeader = (props) => {
  return (
    <StyledPageHeader>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </StyledPageHeader>
  );
};

export default PageHeader;
