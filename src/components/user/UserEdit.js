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
        source="role"
        
        choices={[
        { id: "superAdmin", name: "superAdmin" },  
       { id: "comptable midelt", name: "comptable midelt" },
       { id: "superviseur comptabilite midelt", name: "superviseur comptabilite midelt" },
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
