import { Edit, SimpleForm, TextInput } from "react-admin";

export const RibatnerEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="nom" />
      <TextInput source="rib" />
    </SimpleForm>
  </Edit>
);
