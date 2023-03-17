import * as React from "react";
import {
  Create,
  SelectInput,
  SimpleForm,
  TextInput,
  // DateInput,
  // required,
} from "react-admin";
export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="fullname" />
      <TextInput source="username" />
      <TextInput source="password" />
      {/* <TextInput source="role" /> */}
      <SelectInput
        source="role"
        
        choices={[
          { id: "superAdmin", name: "superAdmin" },  
         { id: "comptable midelt", name: "comptable midelt" },
         { id: "superviseur comptabilite midelt", name: "superviseur comptabilite midelt" },
          ]}
      />
   
    </SimpleForm>
  </Create>
);

