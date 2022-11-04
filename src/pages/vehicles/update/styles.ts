import styled from "styled-components";
import { colors } from "../../../styles/colors";

export const ClientForm = styled.form`
  width: 500px;
  margin-top: 10px;
  border: 1px solid ${colors.lineColor};
  height: 90%;
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px 0px 0px 10px;
  padding: 10px;

  @media (min-width: 450px) and (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 449px) {
    width: 80%;
    overflow: hidden;
    height: auto;
    border-radius: 10px;
  }
`;

export const Row = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  @media (max-width: 449px) {
    flex-direction: column-reverse;
    row-gap: 10px;
    margin-top: 10px;
  }
`;

export const GoBack = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
`;
