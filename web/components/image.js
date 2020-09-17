import styled from 'styled-components';

const StyledImage = styled.div`
  height: 440px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = (props) => {
  return (
    <StyledImage>
      <img src={props.url} alt={props.alt} loading='lazy' />
    </StyledImage>
  );
};

export default Image;
