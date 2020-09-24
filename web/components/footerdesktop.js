import styled from 'styled-components';

const StyledFooterDesktop = styled.footer`
  display: none;

  @media (min-width: 992px) {
    display: block;
    background: #4c5340;
    color: #fff;
    padding: 30px 30px 40px 30px;

    .footerOpeningHours {
      h3 {
        margin-bottom: 10px;
        font-size: 16px;
      }
    }

    .openingHoursWeekDay {
      margin-bottom: 10px;
    }

    .openingHoursWeekDay,
    .openingHoursWeekend {
      display: flex;
      width: 170px;
      justify-content: space-between;

      p {
        font-size: 14px;
      }
    }

    .footerAdress {
      margin-top: 30px;
      h3 {
        font-size: 16px;
        margin-bottom: 10px;
      }
      p {
        font-size: 14px;
      }
    }

    .footerContactUs,
    .footerLogo {
      margin-top: 35px;
    }

    .footerLinks {
      margin-top: 25px;

      width: 130px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footerBottomSection {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const FooterDesktop = (props) => {
  const footerData = props.footerData[0];

  // TEXT CONTENT FROM SANITY
  const openingHoursTitle =
    footerData.textBlockOpeningHours[0].children[0].text;
  const weekDayTitle = footerData.textBlockOpeningHours[1].children[0].text;
  const weekendTitle = footerData.textBlockOpeningHours[3].children[0].text;
  const weekDayHours = footerData.textBlockOpeningHours[2].children[0].text;
  const weekendHours = footerData.textBlockOpeningHours[4].children[0].text;
  const addressTitle = footerData.textBlockAddress[0].children[0].text;
  const address = footerData.textBlockAddress[1].children[0].text;

  return (
    <StyledFooterDesktop>
      <div className='footerOpeningHours'>
        <h3>{openingHoursTitle}</h3>
        <div className='openingHoursWeekDay'>
          <p>{weekDayTitle}</p>
          <p>{weekDayHours}</p>
        </div>
        <div className='openingHoursWeekend'>
          <p>{weekendTitle}</p>
          <p>{weekendHours}</p>
        </div>
      </div>
      <div className='footerAdress'>
        <h3>{addressTitle}</h3>
        <p>{address}</p>
      </div>
      <div className='footerBottomSection'>
        <div className='footerLinks'>
          <a href={footerData.facebookUrl}>
            <img src='/facebookIcon.png' loading='lazy' alt='facebook icon' />
          </a>
          <a href={footerData.instagramkUrl}>
            <img src='/instagramIcon.png' loading='lazy' alt='instagram icon' />
          </a>
          <a href={`mailto:${footerData.email}`}>
            <img src='/mailIcon.png' loading='lazy' alt='mail icon' />
          </a>
        </div>
      </div>
    </StyledFooterDesktop>
  );
};

export default FooterDesktop;
