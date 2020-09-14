import styled from "styled-components";

const StyledImage = styled.div`
  width: 100vw;
  img {
    width: 100%;
  }
`;

const Image = (props) => {
  return (
    <StyledImage>
      <img src={props.url} alt={props.alt} loading="lazy" />
    </StyledImage>
  );
};

export default Image;
