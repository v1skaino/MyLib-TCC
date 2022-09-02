import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ColorsType } from "../../styles/colors/types";
import { SideBar } from "./SideBar";

interface LayoutProps {
  children?: React.ReactNode;
  sideBar: boolean;
}

export const Layout = ({ children, sideBar }: LayoutProps) => {
  return (
    <Container colors={colors}>
      {sideBar ? <SideBar /> : null}
      <Content colors={colors}>{children}</Content>
    </Container>
  );
};

const Container = styled.div<{ colors: ColorsType }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: ${({ colors }) => colors.white};
`;

const Content = styled.div<{ colors: ColorsType }>`
  width: 100%;
  height: 100vh;
  background-color: ${({ colors }) => colors.white};
`;
