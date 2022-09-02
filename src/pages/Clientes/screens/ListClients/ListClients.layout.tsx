import styled from "styled-components";
import { Layout } from "../../../../components/Layout";
import { ListClientsPropsType } from "../../types/ListClients.types";

const ListClientsLayout = ({ data }: ListClientsPropsType) => {
  return (
    <Layout sideBar={true}>
      <Container>
        <TableContainer>{/* <Table items={data} /> */}</TableContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const TableContainer = styled.div`
  width: 90%;
`;

export default ListClientsLayout;
