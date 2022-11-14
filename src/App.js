// import Dashboard from "./Admin/Dashboard";
import {
  Admin,
  Resource,
  CustomRoutes,
  // ListGuesser,
  // Edit,
  EditGuesser,
  ListGuesser,
} from "react-admin";
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
import { UserList } from "./components/user/UserList";
import { UserEdit } from "./components/user/UserEdit";
import { UserCreate } from "./components/user/UserCreate";
// import { PostCreate } from "./components/Virement/CreateVirement";
import { auth } from "./authProvider";
import { OrdervirementEdit } from "./components/OrderVirement/OrdervirementEdit";
import { OrdervirementList } from "./components/OrderVirement/OrdervirementList";
import { OrdervirementCreate } from "./components/OrderVirement/OrdervirementCreate";
import { RIBAtnerCreate } from "./components/RIBAtner/RIBAtnerCreate";
import { FactureList } from "./components/Factures/FactureList";
import { VirementCreate } from "./components/Virement/VirementCreate";
function App(props) {
  return (
    <Admin
      {...props}
      dataProvider={restProvider("http://10.111.1.217:8080")}
      authProvider={auth}
      // layout={CustomLayout}
    >
      <Resource name="fournisseurs" list={FournisseurList} icon={FaTruck} />

      <Resource
        name="ribtempo"
        list={RibtempoList}
        create={RibtempoCreate}
        // create={PostCreate}
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
        create={RIBAtnerCreate}
        icon={FaCreditCard}
      />
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
        icon={FaCreditCard}
      />
      <Resource
        name="ordervirement"
        list={OrdervirementList}
        edit={OrdervirementEdit}
        create={OrdervirementCreate}
        icon={FaCreditCard}
      />
      <Resource
        name="factures"
        list={FactureList}
        // edit={EditGuesser}
        // create={OrdervirementCreate}
        icon={FaCreditCard}
      />
      <Resource
        name="virements"
        list={ListGuesser}
        edit={EditGuesser}
        create={VirementCreate}
        icon={FaCreditCard}
      />

      <CustomRoutes>
        <Route path="/print" element={<PrintModule />} />
      </CustomRoutes>
    </Admin>
  );
}

export default App;
