import styled from 'styled-components';
import MenuBtn from '../components/menubtn';

const StyledMenuBtns = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 60px;
`;

const MenuBtns = () => {
  const [activeButton, setActiveButton] = React.useState(false);
  const menuBtnsId = ['CAFÉ', 'ÖPPETTIDER', 'HITTA HIT'];

  const handleMenuBtnClick = (id) => {
    setActiveButton(id);
  };

  return (
    <StyledMenuBtns>
      {menuBtnsId.map((i) => {
        return (
          <MenuBtn
            text={i}
            onClick={() => handleMenuBtnClick(i)}
            isActive={activeButton === i}
            key={i}
          />
        );
      })}
    </StyledMenuBtns>
  );
};

export default MenuBtns;
