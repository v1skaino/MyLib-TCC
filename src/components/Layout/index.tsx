import Content from "./content";
import { NavigationBar } from "./navBar";
import { SideBarMenu } from "./sideBar";
import { Grid } from "./styles";

const Layout = ({ children, onClick }: any) => {
  return (
    <Grid onClick={onClick}>
      <NavigationBar />
      <SideBarMenu />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
