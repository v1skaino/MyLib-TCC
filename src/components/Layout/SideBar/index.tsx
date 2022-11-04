import { MdOutlineNavigateNext } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { colors } from "../../../styles/colors";

export const SideBarMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(true);

  const routes = [
    {
      route: "/dashboard",
      name: "Dashboard",
    },
    {
      route: "/clients",
      name: "Clientes",
    },
    {
      route: "/vehicles",
      name: "Veículos",
    },
    {
      route: "/billing",
      name: "Faturamento",
    },
  ];

  return (
    <Container>
      <Content>
        <Burguer>
          <GiHamburgerMenu
            onClick={() => setCollapsed(!collapsed)}
            className="hamburguer"
            size={20}
          />
        </Burguer>

        {collapsed ? (
          <>
            <div>
              {routes.map((e, index) => {
                return location.pathname !== e.route ? (
                  <Item key={index} onClick={() => navigate(`${e.route}`)}>
                    {e.name}
                  </Item>
                ) : (
                  <ActiveItem
                    key={index}
                    onClick={() => navigate(`${e.route}`)}
                  >
                    <div></div>
                    {e.name}
                    <MdOutlineNavigateNext size={20} color={colors.lineColor} />
                  </ActiveItem>
                );
              })}
            </div>
          </>
        ) : null}
      </Content>
    </Container>
  );
};

export const Container = styled.div`
  display: grid;
  grid-area: SB;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${colors.lineColor};
  border-top: 0;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const Item = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.lineColor};
  height: 60px;
  cursor: pointer;
  transition: 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${colors.lineColor};
  }
`;

const Burguer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.lineColor};
  height: 60px;
  padding-right: 20px;
  display: none;

  .hamburguer {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .hamburguer {
      display: flex;
      cursor: pointer;
    }
  }
`;

const ActiveItem = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.lineColor};
  border-left: 3px solid ${colors.primary};
  height: 60px;
  cursor: pointer;
  transition: 0.5s;
  color: ${colors.primary};

  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;

  :hover {
    background-color: ${colors.lineColor};
  }
`;
