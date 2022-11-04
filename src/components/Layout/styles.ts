import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 118px auto;
  grid-template-areas:
    "NB NB NB"
    "SB CT CT";
  @media (max-width: 768px) {
    height: auto;
    grid-template-areas:
      "NB NB"
      "SB SB"
      "CT CT";
  }
  height: 100vh;
`;
