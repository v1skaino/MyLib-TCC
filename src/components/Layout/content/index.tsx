import styled from "styled-components";

const Content = ({ children }: any) => {
  return <Container>{children}</Container>;
};

export default Content;

export const Container = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  @media (min-width: 768px) {
    grid-auto-flow: row;
    grid-auto-rows: 25%;
    grid-template-rows: unset;
    overflow: scroll;
    grid-template-columns: unset;
  }
  ::-webkit-scrollbar {
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
  }
`;
