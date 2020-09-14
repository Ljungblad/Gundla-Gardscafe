import styled from 'styled-components';

const StyledFooter = styled.footer`
  background: grey;
  color: white;
  padding: 40px 20px 40px 20px;

  .footerOpeningHours {
    h1 {
      margin-bottom: 10px;
    }
  }

  .openingHoursWeekDay {
    margin-bottom: 10px;
  }

  .openingHoursWeekDay,
  .openingHoursWeekend {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }

  .footerAdress {
    margin-top: 50px;
  }

  .footerContactUs,
  .footerLogo,
  .footerLinks {
    margin-top: 35px;
  }

  .footerLinks {
    margin-bottom: 10px;
  }

  .footerBottomSection {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  const footerData = props.footerData[0];
  const openingHoursTitle =
    footerData.textBlockOpeningHours[0].children[0].text;
  const weekDayTitle = footerData.textBlockOpeningHours[1].children[0].text;
  const weekendTitle = footerData.textBlockOpeningHours[3].children[0].text;
  const weekDayHours = footerData.textBlockOpeningHours[2].children[0].text;
  const weekendHours = footerData.textBlockOpeningHours[4].children[0].text;
  const addressTitle = footerData.textBlockAddress[0].children[0].text;
  const address = footerData.textBlockAddress[1].children[0].text;
  const contactTitle = footerData.textBlockContact[0].children[0].text;

  return (
    <StyledFooter>
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
      <div className='footerContactUs'>
        <h3>{contactTitle}</h3>
        <p>{footerData.email}</p>
      </div>
      <div className='footerBottomSection'>
        <div className='footerLogo'>
          <h3>LOGO</h3>
        </div>
        <div className='footerLinks'>
          <a href={footerData.facebookUrl}>Facebook</a>
          <a href={footerData.instagramkUrl}>Instagram</a>
          <a href={`mailto:${footerData.email}`}>Mail</a>
        </div>
        <div className='footerCopyRight'>
          <p>
            {footerData.copyrightText} {currentYear}
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
