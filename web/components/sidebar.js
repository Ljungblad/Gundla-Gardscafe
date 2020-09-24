import styled from 'styled-components';
import Link from 'next/link';

const StyledSideBar = styled.div`
  height: 100vh;
  width: ${({ open }) => (open ? '250px' : '0px')};
  background: #919984;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0px;
  right: 0;
  overflow: hidden;
  transition: 0.4s;
  padding: ${({ open }) => (open ? '0px 30px 0px 30px' : '0px')};

  .sideBarLogo {
    margin-top: 85px;
  }

  .navigationLinks {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    margin-top: 50px;

    a {
      height: 60px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #000201;
      width: 50%;

      :hover {
        color: #fff;
      }
    }
  }

  @media (min-width: 992px) {
    width: 260px;
    height: 500px;
    padding-left: 30px;
    position: relative;

    .sideBarLogo {
      margin-top: 45px;
    }

    .navigationLinks {
      margin-top: 40px;

      a {
        font-size: 18px;
        height: 48px;
      }
    }
  }
`;

const SideBar = (props) => {
  const navigationLinks = props.navigationLinks;

  return (
    <StyledSideBar open={props.open}>
      <a href='/'>
        <img src='/logo2.png' className='sideBarLogo' alt='logo' />
      </a>
      <div className='navigationLinks'>
        {navigationLinks.map((item, i) => (
          <a href={item.link} key={i}>
            {item.title}
          </a>
        ))}
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
