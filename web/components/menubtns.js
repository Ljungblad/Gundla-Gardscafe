import styled from "styled-components";
import MenuBtn from "../components/menubtn";

const StyledMenuBtns = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 60px;

  @media (min-width: 992px) {
    display: none;
  }
`;

const MenuBtns = () => {
  const [activeButton, setActiveButton] = React.useState(false);

  const menuBtns = [
    {
      title: "CAFÉ",
      link: "/cafe",
    },
    {
      title: "ÖPPETTIDER",
      link: "#openingHours",
    },
    {
      title: "HITTA HIT",
      link: "/findus",
    },
  ];

  const handleMenuBtnClick = (id) => {
    setActiveButton(id);
  };

  return (
    <StyledMenuBtns>
      {menuBtns.map((btn, i) => {
        return (
          <MenuBtn
            text={btn.title}
            onClick={() => handleMenuBtnClick(btn.title)}
            isActive={activeButton === btn.title}
            link={btn.link}
            key={i}
          />
        );
      })}
    </StyledMenuBtns>
  );
};

export default MenuBtns;
