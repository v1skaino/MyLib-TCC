import { FaPen, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { SubmitButton } from "../../../../../components/SubmitButton";
import { TableData } from "../../../../../components/TableData";
import { colors } from "../../../../../styles/colors";
import { ColorsType } from "../../../../../styles/colors/types";
import { fontSize } from "../../../../../styles/fonts";

interface TableProps {
  items: any[];
}

export function Table(props: TableProps) {
  return (
    <>
      <TopTable>
        <SubmitButton
          filled={false}
          label=" + Adicionar"
          height={30}
          width={8}
        />
      </TopTable>
      <TableData dados={props.items} header={["Nome", "Email"]}>
        {props.items.map((item) => (
          <TableBody>
            <TableRow key={item.id}>
              <TableRowArea colors={colors}>{item.nome}</TableRowArea>
              <TableRowArea colors={colors}>{item.email}</TableRowArea>
              {/* <TableRowArea>
                  {item.roles[0].id === 2 ? "Admin" : "Colaborador"}
                </TableRowArea> */}
              <TableRowArea colors={colors} style={{ columnGap: 30 }}>
                <FaPen
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => {}}
                />
                <FaTrash
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => {}}
                />
              </TableRowArea>
            </TableRow>
          </TableBody>
        ))}
      </TableData>
    </>
  );
}

const TableRowArea = styled.th<{ colors: ColorsType }>`
  width: 100%;
  height: 50px;
  color: ${({ colors }) => colors.primary};
  font-size: ${fontSize.xlarge04}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TableBody = styled.tbody`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TableRow = styled.tr`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TopTable = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
