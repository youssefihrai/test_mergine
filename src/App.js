// import Dashboard from "./Admin/Dashboard";
import { Admin, Resource, CustomRoutes } from "react-admin";
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
import { auth } from "./authProvider";
import { OrdervirementEdit } from "./components/OrderVirement/OrdervirementEdit";
import { OrdervirementList } from "./components/OrderVirement/OrdervirementList";
import { OrdervirementCreate } from "./components/OrderVirement/OrdervirementCreate";
import { RIBAtnerCreate } from "./components/RIBAtner/RIBAtnerCreate";

import { VirementCreate } from "./components/Virement/VirementCreate";
import { VirementList } from "./components/Virement/VirementList";
import { VirementEdit } from "./components/Virement/VirementEdit";
import { LogfactureList } from "./components/logfacture/logfactureList";
import CreateFournisseur from "./components/Fournisseur/CreateFournisseur";

import { FactureRes } from "./components/FactureResptionner/FactureRes";
import { FactureResCreate } from "./components/FactureResptionner/FactureResCreate";

import { FactureRechereCreate } from "./components/factureRecherche/FactureRechereCreate";
import { FactureResEdit } from "./components/FactureResptionner/FactureResEdit";
import { FactureRecherche } from "./components/factureRecherche/FactureRechere";

import { historiquefacture } from "./components/historiquefacture/historiquefacture";
import { PaiementList } from "./components/paiement/PaiementList";
import { PaiementCreate } from "./components/paiement/PaiementCreate";
import { PaiementEdit } from "./components/paiement/PaiementEdit";
import { FactureValider } from "./components/Facturevalider/FactureValider";
import { FactureValiderEdit } from "./components/Facturevalider/FactureValiderEdit";
import { All } from "./components/all/All";
import { FactureRechereEdit } from "./components/factureRecherche/FactureRechereEdit";

const fetchJson = async (url, options = {}) => {
  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: "application/json",
    });
  if (
    !requestHeaders.has("Content-Type") &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders.set("Content-Type", "application/json");
  }

  const response = await fetch(url, { ...options, headers: requestHeaders });
  const text = await response.text();
  const o = {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
    body: text,
  };
  let status = (o.status = o.statusText),
    headers = o.headers,
    body = o.body;
  let json;
  try {
    json = JSON.parse(body);
  } catch (e) {
    console.log(e);
  }
  if (status < 200 || status >= 300) {
    return Promise.reject(body);
  }
  return Promise.resolve({
    status: status,
    headers: headers,
    body: body,
    json: json,
  });
};

function App(props) {
  const dataProvider = restProvider("http://localhost:8080", fetchJson);

  return (
    <Admin
      {...props}
      dataProvider={dataProvider}
      authProvider={auth}
      layout={CustomLayout}
    >
      {(permissions) => [
        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="fournisseurs"
            list={FournisseurList}
            create={
              permissions === "superviseur comptabilite midelt"
                ? CreateFournisseur
                : null
            }
            icon={FaTruck}
          />
        ) : null,
        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="ribfournisseurs"
            list={RibfournisseurList}
            edit={RibfournisseurEdit}
            icon={FaCreditCard}
          />
        ) : null,
        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="ribatner"
            list={RibatnerList}
            edit={
              permissions === "admin" ||
              permissions === "superviseur comptabilite midelt"
                ? RibatnerEdit
                : null
            }
            create={
              permissions === "admin" ||
              permissions === "superviseur comptabilite midelt"
                ? RIBAtnerCreate
                : null
            }
            icon={FaCreditCard}
          />
        ) : null,
        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="ribtempo"
            list={RibtempoList}
            // edit={RibatnerEdit}
            create={RibtempoCreate}
            icon={FaCreditCard}
          />
        ) : null,
        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="ordervirement"
            list={OrdervirementList}
            edit={OrdervirementEdit}
            create={OrdervirementCreate}
            icon={FaCreditCard}
          />
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="facturesres"
            list={FactureRes}
            edit={FactureResEdit}
            create={FactureResCreate}
            icon={FaTruck}
          ></Resource>
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="facturevalider"
            list={FactureValider}
            edit={
              permissions === "comptable midelt" ||
              permissions === "superviseur comptabilite midelt"
                ? FactureValiderEdit
                : null
            }
            icon={FaTruck}
          ></Resource>
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource name="all" list={All} icon={FaTruck}></Resource>
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="virements"
            list={VirementList}
            edit={VirementEdit}
            create={VirementCreate}
          />
        ) : null,
        permissions === "admin" ||
        permissions === "normal user" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource name="logfactures" list={LogfactureList} />
        ) : null,
        permissions === "admin" || permissions === "comptable midelt" ? (
          <CustomRoutes>
            <Route path="/print" element={<PrintModule />} />
          </CustomRoutes>
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="historiquefacture"
            list={historiquefacture}
            icon={FaCreditCard}
          />
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="factureRech"
            list={FactureRecherche}
            create={FactureRechereCreate}
            edit={FactureRechereEdit}
          />
        ) : null,

        permissions === "admin" ||
        permissions === "comptable midelt" ||
        permissions === "superviseur comptabilite midelt" ? (
          <Resource
            name="paiement"
            list={PaiementList}
            edit={PaiementEdit}
            create={PaiementCreate}
          />
        ) : null,

        permissions === "admin" ? (
          <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            icon={FaCreditCard}
          />
        ) : null,
      ]}
    </Admin>
  );
}

export default App;
