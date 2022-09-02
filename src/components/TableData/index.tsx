import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ColorsType } from "../../styles/colors/types";
import { fontConfig, fontSize } from "../../styles/fonts";

interface TableProps {
  children: React.ReactNode;
  header: string[];
  dados: any[];
}

export function TableData(props: TableProps) {
  return (
    <Table>
      <TableHead>
        {props.header.map((item) => (
          <TableHeaderArea colors={colors}>{item}</TableHeaderArea>
        ))}
        <TableHeaderArea colors={colors}>Ações</TableHeaderArea>
      </TableHead>
      {props.children}
    </Table>
  );
}

//Table Style

const Table = styled.table`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 5px rgba(17, 92, 91, 0.3);
`;

const TableHeaderArea = styled.th<{ colors: ColorsType }>`
  width: 100%;
  height: 60px;
  color: ${({ colors }) => colors.white};
  background-color: ${({ colors }) => colors.primary};
  font-size: ${fontSize.xlarge04}px;
  font-weight: ${fontConfig.weight.bold};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableHead = styled.thead`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
