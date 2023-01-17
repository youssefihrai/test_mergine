import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Create, required, SimpleForm, TextInput } from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));

const CreateFournisseur = (props) => {
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm {...props}>
        <TextInput
          validate={required("Le Code fournisseur est obligatoire")}
          className={classes.autocomplete}
          source="CodeFournisseur"
        />
        <TextInput
          validate={required("Le fournisseur est obligatoire")}
          className={classes.autocomplete}
          source="nom"
        />
      </SimpleForm>
    </Create>
  );
};
export default CreateFournisseur;
