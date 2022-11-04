import { BiEdit } from "react-icons/bi";
import { CgCloseR } from "react-icons/cg";
import styled from "styled-components";
import { SvgCar } from "../../assets/svgs/car.svg";
import { SvgMotorcycle } from "../../assets/svgs/motorcycle";
import { colors } from "../../styles/colors";
import { Input } from "../Input";

interface CarTypes {
  model: string;
  label: string;
  type: number;
  owner: string;
  observation: string;
}

interface CarProps {
  vehicle: CarTypes;
  handleDelete: () => void;
  handleEdit: () => void;
}

export const ClientCard = ({ vehicle, handleDelete, handleEdit }: CarProps) => {
  return (
    <Container>
      <Edit onClick={handleEdit}>
        <BiEdit color={vehicle.observation} size={33} />
      </Edit>
      <Delete onClick={handleDelete}>
        <CgCloseR color={vehicle.observation} size={30} />
      </Delete>
      {vehicle.type === 1 ? (
        <SvgCar color={vehicle.observation} width="150" height="150" />
      ) : (
        <SvgMotorcycle color={vehicle.observation} width="150" height="150" />
      )}
      <Input
        width="90%"
        labelColor={vehicle.observation}
        readOnly={true}
        defaultValue={vehicle.owner}
        label="Proprietário"
      />
      <Input
        width="90%"
        readOnly={true}
        labelColor={vehicle.observation}
        defaultValue={vehicle.model}
        label="Modelo"
      />
      <Input
        width="90%"
        labelColor={vehicle.observation}
        readOnly={true}
        defaultValue={vehicle.label}
        label="Placa"
      />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  margin-top: 10px;
  position: relative;
  height: auto;
  min-height: 300px;
  border: 1px solid ${colors.lineColor};
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.5s;

  :hover {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const Delete = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  cursor: pointer;
`;

const Edit = styled.div`
  position: absolute;
  left: -10px;
  top: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  cursor: pointer;
`;
