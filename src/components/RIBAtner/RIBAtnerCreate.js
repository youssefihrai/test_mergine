import { Create, SimpleForm, TextInput } from "react-admin";

export const RIBAtnerCreate = () => {
  return (
    <Create>
      <SimpleForm>
        {/* <TextInput source="id" /> */}
        <TextInput source="nom" />
        <TextInput source="rib" />
      </SimpleForm>
    </Create>
  );
};
