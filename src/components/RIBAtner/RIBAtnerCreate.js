import { makeStyles } from "@material-ui/core";
import { Create, required, SimpleForm, TextInput } from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));

export const RIBAtnerCreate = () => {
  const classes = useStyles();
  return (
    <Create>
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
    </Create>
  );
};
