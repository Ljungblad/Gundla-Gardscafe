import styled from 'styled-components';

const StyledTextSection = styled.div`
  padding: 60px 24px 60px 24px;
  background-color: ${(props) => props.backgroundColor};

  h3 {
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 3px;
  }

  p {
    letter-spacing: 1px;
    line-height: 22px;
  }

  h3,
  p {
    color: ${(props) => props.textColor};
  }

  a {
    color: ${(props) => props.textColor};

    :hover {
      color: #4c5340;
    }
  }

  .arrowLinkContainer {
    width: 100%;
    margin-top: 20px;
    display: ${({ linkType }) => (linkType == 'arrow' ? 'block' : 'none')};

    img {
      height: 18px;
    }
  }

  .arrowDownContainer {
    width: 100%;
    margin-top: 20px;
    display: ${({ linkType }) => (linkType == 'down' ? 'block' : 'none')};

    img {
      height: 18px;
    }
  }

  .textLinkContainer {
    display: ${({ linkType }) => (linkType == 'text' ? 'block' : 'none')};
    margin-top: 20px;
    width: 100%;

    a {
      display: flex;
      justify-content: flex-end;
    }
  }

  @media (min-width: 992px) {
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}px;
    display: flex;

    p {
      line-height: 24px;
    }

    ${(props) =>
      props.align === 'center' &&
      `
    justify-content: center;
    align-items: center;
    .textContainer {
      width: 330px;
    }
    `}

    ${(props) =>
      props.align === 'left' &&
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
      <div className='textContainer'>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
        <div className='arrowLinkContainer'>
          <a href={props.link}>
            <img src='/arrow_right.png' loading='lazy'></img>
          </a>
        </div>
        <div className='arrowDownContainer'>
          <a href={props.link}>
            <img src='/arrow_down.png' loading='lazy'></img>
          </a>
        </div>
        <div className='textLinkContainer'>
          <a href={props.link}>LÄS MER</a>
        </div>
      </div>
    </StyledTextSection>
  );
};

export default TextSection;
