import styled from "styled-components";
import { SvgVehicles } from "../../../assets/svgs/vehicles";
import { colors } from "../../../styles/colors";
export const NavigationBar = () => {
  return (
    <Container>
      <NavBar>
        <div>
          <SvgVehicles width="150" height="150" />
        </div>
      </NavBar>
    </Container>
  );
};

export const Container = styled.div`
  display: grid;
  grid-area: NB;
`;

const NavBar = styled.nav`
  width: 100%;
  height: 118px;
  border: 1px solid ${colors.lineColor};
  background-color: ${colors.white};
  display: flex;
  padding: 0px 30px;
  justify-content: space-between;
  align-items: center;
`;
