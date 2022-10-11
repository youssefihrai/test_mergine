import { Filter, TextInput } from "react-admin";

const FilterRIBTempo = (props) => (
  <Filter {...props}>
    <TextInput source="fournisseur" />
    <TextInput source="rib" />
  </Filter>
);
export default FilterRIBTempo;
