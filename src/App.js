// import Dashboard from "./Admin/Dashboard";
import { Admin, Resource, CustomRoutes } from "react-admin";
// import { EditGuesser, ListGuesser } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { FournisseurList } from "./components/Fournisseur/ListFournisseurs";
import { FaTruck, FaCreditCard } from "react-icons/fa";
import { RibtempoList } from "./components/RIBtempo/RibtempoList";
import { RibtempoCreate } from "./components/RIBtempo/RibtempoCreate";
import { RibfournisseurList } from "./components/RIBFournisseurs/RibfournisseurList";
import { RibfournisseurEdit } from "./components/RIBFournisseurs/RibfournisseurEdit";
import { CustomLayout } from "./components/custom/layout/CustomLayout";
import PrintModule from "./components/printModule/PrintModule";
import { Route } from "react-router-dom";
import { RibatnerList } from "./components/RIBAtner/RibatnerList";
import { RibatnerEdit } from "./components/RIBAtner/RibatnerEdit";

function App(props) {
  return (
    <Admin
      {...props}
      dataProvider={restProvider("http://10.111.1.217:8080")}
      layout={CustomLayout}
    >
      <Resource name="fournisseurs" list={FournisseurList} icon={FaTruck} />

      <Resource
        name="ribtempo"
        list={RibtempoList}
        create={RibtempoCreate}
        icon={FaCreditCard}
      />

      <Resource
        name="ribfournisseurs"
        list={RibfournisseurList}
        edit={RibfournisseurEdit}
        icon={FaCreditCard}
      />

      <Resource
        name="ribatner"
        list={RibatnerList}
        edit={RibatnerEdit}
        icon={FaCreditCard}
      />

      <CustomRoutes>
        <Route path="/print" element={<PrintModule />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
