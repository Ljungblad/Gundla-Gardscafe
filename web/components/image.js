import styled from 'styled-components';

const StyledImage = styled.div`
  height: 440px;
  margin: ${(props) => props.marginDesktop};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 992px) {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: ${(props) => props.marginMobile};

    img {
      padding: ${(props) => props.paddingDesktop};
    }
  }
`;

const Image = (props) => {
  return (
    <StyledImage
      width={props.width}
      height={props.height}
      marginMobile={props.marginMobile}
      marginDesktop={props.marginDesktop}
    >
      <img
        paddingDesktop={props.paddingDesktop}
        src={props.url}
        alt={props.alt || 'image'}
        loading='lazy'
      />
    </StyledImage>
  );
};

export default Image;
