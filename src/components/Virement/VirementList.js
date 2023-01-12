import { Datagrid, List, NumberField, TextField } from "react-admin";
import VirmentFilter from "./VirmentFilter";

export const VirementList = () => {
  return (
    <List filters={<VirmentFilter />}>
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <TextField source="orderVirementId" />
        <TextField source="nom" />
        <TextField source="rib" />
        <NumberField source="montantVirement" />
        <TextField source="Etat" />
      </Datagrid>
    </List>
  );
};
