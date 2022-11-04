import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import DefaultButton from "../../components/button";
import { ClientCard } from "../../components/ClientCard";
import Label from "../../components/Label";
import Layout from "../../components/Layout";
import { Loader } from "../../components/loader";
import { vehicles } from "../../services/vehicles";
import { CarType } from "../../services/vehicles/types";
import { colors } from "../../styles/colors";

const Vehicles = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const [collection, setCollection] = useState<CarType[]>([]);

  const handleStart = async () => {
    setLoader(true);

    const fetchGetVehicles = await vehicles.getVehicles();

    if (!fetchGetVehicles) {
      setLoader(false);
      toast.error("Falha ao carregar dados!");
    }

    setCollection(fetchGetVehicles);
    setLoader(false);
  };

  const handleDeleteVehicle = async (item: CarType) => {
    setLoader(true);

    await vehicles
      .deleteVehicle(item.id)
      .then(() => {
        handleStart();
        toast.success("Cliente removido com sucesso!");
      })
      .catch(() => {
        toast.error("Falha ao remover cliente!");
        handleStart();
        setLoader(false);
      });
  };

  const handleEdit = (item: CarType) => {
    navigate("/vehicles/update", { state: item });
  };

  useEffect(() => {
    handleStart();
  }, []);
  return (
    <Layout>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Top>
            <Column>
              <Label size={14}>Total de clientes</Label>
              <Label size={24}>{collection.length}</Label>
            </Column>
            <DefaultButton
              label="Adicionar"
              background={colors.white}
              borderColor={colors.primary}
              color={colors.primary}
              handleClick={() => navigate("/vehicles/create")}
            />
          </Top>
          <CardList>
            {collection.length > 0 &&
              collection.map((item) => {
                return (
                  <ClientCard
                    handleEdit={() => handleEdit(item)}
                    handleDelete={() => handleDeleteVehicle(item)}
                    vehicle={item}
                  />
                );
              })}
          </CardList>
        </>
      )}
    </Layout>
  );
};
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 5px;
  width: 100%;
  height: auto;
`;
export default Vehicles;
