import styled from 'styled-components';

const StyledPageHeader = styled.div`
  padding: 30px 24px 50px 24px;

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
