import { Datagrid, DateField, List, TextField } from "react-admin";
import OrderVirementFilter from "./OrderVirementFilter";

export const OrdervirementList = () => (
  <List filters={<OrderVirementFilter />}>
    <Datagrid rowClick="edit" bulkActionButtons={false}>
      <TextField source="id" />
      {/* <NumberField source="ribAtner" /> */}
      <TextField source="nom" />
      <TextField source="rib" />
      <TextField source="etat" />
      <DateField source="datecreation" />
    </Datagrid>
  </List>
);
