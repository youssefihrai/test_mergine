import { makeStyles } from "@material-ui/core";
import {
  Edit,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));
export const RibfournisseurEdit = () => {
  const classes = useStyles();
  return (
    <Edit>
      <SimpleForm>
        {/* <TextInput source="id" /> */}
        <TextInput
          className={classes.autocomplete}
          source="fournisseur"
          disabled
        />
        <TextInput className={classes.autocomplete} source="rib" disabled />
        <SelectInput
          className={classes.autocomplete}
          source="validation"
          validate={required()}
          choices={[
            { id: "Validé", name: "Validé" },
            { id: "Non Valider", name: "Non Valider" },
            { id: "Ignorer", name: "Ignorer" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};
