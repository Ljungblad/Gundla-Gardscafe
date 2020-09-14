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
  console.log(footerData);
  console.log(footerData.textBlockOpeningHours[0].children[0].text);

  return (
    <StyledFooter>
      <div className='footerOpeningHours'>
        <h3>{footerData.textBlockOpeningHours[0].children[0].text}</h3>
        <div className='openingHoursWeekDay'>
          <p>{footerData.textBlockOpeningHours[1].children[0].text}</p>
          <p>{footerData.textBlockOpeningHours[2].children[0].text}</p>
        </div>
        <div className='openingHoursWeekend'>
          <p>{footerData.textBlockOpeningHours[3].children[0].text}</p>
          <p>{footerData.textBlockOpeningHours[4].children[0].text}</p>
        </div>
      </div>
      <div className='footerAdress'>
        <h3>{footerData.textBlockAddress[0].children[0].text}</h3>
        <p>{footerData.textBlockAddress[1].children[0].text}</p>
      </div>
      <div className='footerContactUs'>
        <h3>{footerData.textBlockContact[0].children[0].text}</h3>
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
