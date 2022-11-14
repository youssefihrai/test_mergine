import {
  DateInput,
  Edit,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="username" />
      {/* <TextInput source="Role" /> */}
      <SelectInput
        source="Role"
        choices={[
          { id: "admin", name: "Admin" },
          { id: "normal user", name: "normal user" },
          //   { id: "photography", name: "Photography" },
        ]}
      />
      {/* <TextInput source="password" /> */}
      <SelectInput
        source="isActivated"
        choices={[
          { id: "true", name: "activer" },
          { id: "false", name: "desactiver" },
          //   { id: "photography", name: "Photography" },
        ]}
      />
      <DateInput source="created" disabled />
    </SimpleForm>
  </Edit>
);
