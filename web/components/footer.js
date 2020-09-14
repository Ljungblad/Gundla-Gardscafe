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

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <div className='footerOpeningHours'>
        <h3>Öppettider</h3>
        <div className='openingHoursWeekDay'>
          <p>Vardagar</p>
          <p>10 - 17</p>
        </div>
        <div className='openingHoursWeekend'>
          <p>Helger</p>
          <p>11 - 15</p>
        </div>
      </div>
      <div className='footerAdress'>
        <h3>Adress</h3>
        <p>Gundla Mosse 32</p>
      </div>
      <div className='footerContactUs'>
        <h3>Kontakta oss</h3>
        <p>gundla@gmail.com</p>
        <p>071 234 56 78</p>
      </div>
      <div className='footerBottomSection'>
        <div className='footerLogo'>
          <h3>LOGO</h3>
        </div>
        <div className='footerLinks'>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Mail</a>
        </div>
        <div className='footerCopyRight'>
          <p>&copy; Gundla Gårdscafé {currentYear}</p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
