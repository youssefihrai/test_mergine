import { Datagrid, DateField, List, NumberField, TextField } from "react-admin";
import FactureFilter from "./FactureFilter";

export const FactureList = () => {
  return (
    <List filters={<FactureFilter />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <DateField source="DATEDOC" label="Datedoc" />
        <TextField source="nom" />
        <NumberField source="NETAPAYER" label="Net A Payer" />
      </Datagrid>
    </List>
  );
};
