import { Datagrid, List, TextField } from "react-admin";
import FilterFournisseurs from "./FilterFournisseurs";

export const FournisseurList = () => {
  return (
    <List filters={<FilterFournisseurs />}>
      <Datagrid bulkActionButtons={false}>
        {/* <TextField source="id" /> */}
        <TextField source="CodeFournisseur" />
        <TextField source="nom" />
      </Datagrid>
    </List>
  );
};
