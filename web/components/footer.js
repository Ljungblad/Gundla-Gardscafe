import styled from "styled-components";

const StyledFooter = styled.footer`
  background: #4c5340;
  color: #fff;
  padding: 40px 20px 40px 20px;

  .footerOpeningHours {
    h3 {
      margin-bottom: 10px;
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
  }

  .footerAdress {
    margin-top: 50px;
  }

  .footerContactUs,
  .footerLinks {
    margin-top: 35px;
  }

  .footerLogo {
    margin-top: 45px;
  }
  .footerLinks {
    margin-bottom: 10px;
    height: 50px;
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

  @media (min-width: 992px) {
    display: none;
  }
`;

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
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
  const contactTitle = footerData.textBlockContact[0].children[0].text;

  return (
    <StyledFooter id="openingHours">
      <div className="footerOpeningHours">
        <h3>{openingHoursTitle}</h3>
        <div className="openingHoursWeekDay">
          <p>{weekDayTitle}</p>
          <p>{weekDayHours}</p>
        </div>
        <div className="openingHoursWeekend">
          <p>{weekendTitle}</p>
          <p>{weekendHours}</p>
        </div>
      </div>
      <div className="footerAdress">
        <h3>{addressTitle}</h3>
        <p>{address}</p>
      </div>
      <div className="footerContactUs">
        <h3>{contactTitle}</h3>
        <p>{footerData.email}</p>
      </div>
      <div className="footerBottomSection">
        <div className="footerLogo">
          <img src="/logo2.png" loading="lazy" alt="logo" />
        </div>
        <div className="footerLinks">
          <a href={footerData.facebookUrl}>
            <img src="/facebookIcon.png" loading="lazy" alt="facebook icon" />
          </a>
          <a href={footerData.instagramkUrl}>
            <img src="/instagramIcon.png" loading="lazy" alt="instagram icon" />
          </a>
          <a href={`mailto:${footerData.email}`}>
            <img src="/mailIcon.png" loading="lazy" alt="mail icon" />
          </a>
        </div>
        <div className="footerCopyRight">
          <p>
            {footerData.copyrightText} {currentYear}
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
