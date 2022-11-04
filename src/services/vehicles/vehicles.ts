import api from "../api/api";

const endPoint = "vehicles";

const getVehicles = async () =>
  await api
    .get(`${endPoint}`)
    .then((res: any) => {
      return res.data;
    })
    .catch(() => {
      return false;
    });

const deleteVehicle = async (id: number) => {
  api.delete(`${endPoint}/${id}`);
};

const editVehicle = async (id: number, body: any) => {
  api.put(`${endPoint}/${id}`, body);
};

const createVehicle = async (body: any) => {
  api.post(`${endPoint}`, body);
};

export const vehicles = {
  getVehicles,
  deleteVehicle,
  editVehicle,
  createVehicle,
};
