import { Filter, TextInput } from "react-admin";

const FilterRLogFacture = (props) => (
  <Filter {...props}>
    <TextInput source="CODEDOCUTIL" label="Code" />
    <TextInput source="CODECHT" label="Chantier" />
    <TextInput source="NOM" label="Nom" />
    <TextInput source="LIBREGLEMENT" label="mode de paiement" />
    <TextInput source="orderVirementId" />
    <TextInput source="etat" />
  </Filter>
);
export default FilterRLogFacture;
