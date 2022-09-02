import { Layout } from "../../../components/Layout";
import { DashboardPropsType } from "../types/Dashboard.types";

const DashboardLayout = ({ data }: DashboardPropsType) => {
  return <Layout sideBar={true}></Layout>;
};

export default DashboardLayout;
