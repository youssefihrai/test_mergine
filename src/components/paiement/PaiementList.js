import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";

export const PaiementList = () => {
  return (
    <List>
      <Datagrid rowClick="edit" bulkActionButtons={false}>
        {/* <TextField source="id" /> */}
        <TextField source="orderVirementId" />
        <TextField source="nom" />
        <TextField source="rib" />
        <NumberField source="montantVirement" />
        <TextField source="Etat" />
        <DateField source="dateOperation" />
      </Datagrid>
    </List>
  );
};
