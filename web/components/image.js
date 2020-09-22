import styled from "styled-components";

const StyledImage = styled.div`
  height: 440px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    width: ${(props) => props.width}%;
  }
`;

const Image = (props) => {
  return (
    <StyledImage width={props.width}>
      <img src={props.url} alt={props.alt || "image"} loading="lazy" />
    </StyledImage>
  );
};

export default Image;
