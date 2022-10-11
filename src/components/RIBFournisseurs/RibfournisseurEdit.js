import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export const RibfournisseurEdit = () => (
  <Edit>
    <SimpleForm>
      {/* <TextInput source="id" /> */}
      <TextInput source="fournisseur" disabled />
      <TextInput source="rib" disabled />
      <SelectInput
        source="validation"
        choices={[
          { id: "Validé", name: "Validé" },
          { id: "Non Valider", name: "Non Valider" },
          { id: "Ignorer", name: "Ignorer" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
