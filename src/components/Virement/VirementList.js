import { Datagrid, List, NumberField, TextField } from "react-admin";

export const VirementList = () => {
  return (
    <List>
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
