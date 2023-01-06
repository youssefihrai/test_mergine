import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";
import FilterRLogFacture from "./FilterRLogFacture";

export const LogfactureList = (props) => {
  return (
    <List filters={<FilterRLogFacture />}>
      <Datagrid bulkActionButtons={false} {...props}>
        {/* <TextField source="id" /> */}
        <TextField source="CODEDOCUTIL" label="Code" />
        <TextField source="CODECHT" label="Chantier" />
        <TextField source="DATEDOC" label="Date" />
        <TextField source="NOM" label="Nom" />
        <TextField source="LIBREGLEMENT" label="Reglement de paie" />
        <NumberField source="TOTHTNET" label="HT" />
        <NumberField source="TOTTVANET" label="TVA" />
        <NumberField source="TOTALTTC" label="TTC" />
        <NumberField source="NETAPAYER" label="Net a payer" />
        <TextField source="orderVirementId" />
        <TextField source="etat" />
      </Datagrid>
    </List>
  );
};
