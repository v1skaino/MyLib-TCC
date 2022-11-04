import { useState } from "react";
import { SketchPicker } from "react-color";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import DefaultButton from "../../../components/button";
import { Input } from "../../../components/Input";
import Label from "../../../components/Label";
import Layout from "../../../components/Layout";
import { Loader } from "../../../components/loader";
import { Select } from "../../../components/select";
import { vehicles } from "../../../services/vehicles";
import { CarType } from "../../../services/vehicles/types";
import { colors } from "../../../styles/colors";
import { fontConfig } from "../../../styles/fonts";
import { ClientForm, GoBack, Row } from "./styles";

const UpdateVehicle = () => {
  const params = useLocation();
  const selectedVehicle = params.state as CarType;

  const [model, setModel] = useState<string>(selectedVehicle?.model);
  const [label, setLabel] = useState<string>(selectedVehicle?.label);
  const [type, setType] = useState<number>(selectedVehicle?.type);
  const [owner, setOwner] = useState<string>(selectedVehicle?.owner);
  const [observation, setObservation] = useState<string>(
    selectedVehicle?.observation,
  );
  const [colorPicker, setColorPicker] = useState<boolean>();

  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const options = [
    { value: "1", name: "Carro" },
    { value: "2", name: "Moto" },
  ];

  const handleEdit = async () => {
    setLoading(true);

    const body = {
      model: model,
      label: label,
      type: type,
      owner: owner,
      observation: observation,
    };

    await vehicles
      .editVehicle(selectedVehicle?.id, body)
      .then(() => {
        setLoading(false);
        navigate("/vehicles");
        toast.success("Cliente editado com sucesso!");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Falha ao editar cliente!");
      });
  };

  return (
    <>
      <Layout>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Label
              color={observation}
              size={24}
              fontWeight={fontConfig.weight.regular}
            >
              Editar Cliente
            </Label>
            <ClientForm>
              <Input
                width="100%"
                labelColor={observation}
                label="Nome do Cliente"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
              <Input
                width="100%"
                labelColor={observation}
                label="Modelo do veículo"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <Input
                width="100%"
                label="Placa"
                labelColor={observation}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
              <Select
                label="Tipo de veículo"
                borderColor={observation}
                options={options}
                width="100%"
                value={type}
                onChange={(e) => setType(e.target.value)}
              />
              <Input
                width="100%"
                label="Cor do veículo"
                labelColor={observation}
                value={observation}
                readOnly={true}
                onClick={() => setColorPicker(!colorPicker)}
              />
              {colorPicker ? (
                <SketchPicker
                  color={observation}
                  onChangeComplete={(e) => setObservation(e.hex)}
                />
              ) : null}

              <Row>
                <DefaultButton
                  color={colors.white}
                  background={observation}
                  borderColor={observation}
                  width={"90px"}
                  handleClick={() => handleEdit()}
                  label="Editar"
                />
              </Row>
            </ClientForm>
            <GoBack>
              <DefaultButton
                color={observation}
                background={colors.white}
                borderColor={observation}
                width={"90px"}
                handleClick={() => navigate("/vehicles")}
                label="Voltar"
              />
            </GoBack>
          </>
        )}
      </Layout>
    </>
  );
};

export default UpdateVehicle;
