import { Filter, TextInput } from "react-admin";

export const RibAtnerFilter = (props) => (
  <Filter {...props}>
    {/* <TextInput source="id" /> */}
    <TextInput source="nom" />
    <TextInput source="rib" />
  </Filter>
);
