import styled from "styled-components";

const StyledCopyright = styled.div`
  display: none;

  @media (min-width: 992px) {
    width: 100%;
    height: 82px;
    background-color: #242b18;
    display: flex;
    justify-content: center;
    align-items: center;
   

    p {
      color: white;
    }
  }
`;

const Copyright = (props) => {
  const currentYear = new Date().getFullYear();
  const footerData = props.footerData[0];

  return (
    <StyledCopyright>
      <p>
        {footerData.copyrightText} {currentYear}
      </p>
    </StyledCopyright>
  );
};

export default Copyright;
