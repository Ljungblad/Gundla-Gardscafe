import styled from 'styled-components';
import SideBar from '../components/sidebar';

const StyledBurger = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 1;
  position: relative;

  div {
    width: 30px;
    height: 3px;
    background: #000;
    transform-origin: 1px;
    transition: 0.4s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <SideBar open={open}></SideBar>
    </div>
  );
};

export default Burger;
