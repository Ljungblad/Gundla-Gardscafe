import styled from 'styled-components';
import MenuBtn from '../components/menubtn';

const StyledMenuBtns = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuBtns = () => {
  const [activeButton, setActiveButton] = React.useState(false);
  const menuBtnsId = ['CAFÉMENY', 'ÖPPETTIDER', 'HITTA HIT'];

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
