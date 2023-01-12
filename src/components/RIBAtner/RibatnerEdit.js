import { makeStyles } from "@material-ui/core";
import { Edit, required, SimpleForm, TextInput } from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));

export const RibatnerEdit = () => {
  const classes = useStyles();
  return (
    <Edit>
      <SimpleForm>
        {/* <TextInput source="id" /> */}
        <TextInput
          validate={required("Le nom est obligatoire")}
          className={classes.autocomplete}
          source="nom"
        />
        <TextInput
          validate={required("Le RIB est obligatoire")}
          className={classes.autocomplete}
          source="rib"
        />
      </SimpleForm>
    </Edit>
  );
};
