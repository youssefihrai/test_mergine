import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  regex,
  required,
  SimpleForm,
  TextInput,
  useDataProvider,
} from "react-admin";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));

export const RibtempoCreate = (props) => {
  const dataProvider = useDataProvider();
  const [fournisseurs, setFournisseurs] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("fournisseurs", {
        pagination: { page: 1, perPage: 3000 },
        sort: { field: "nom", order: "ASC" },
      })
      .then(({ data }) => {
        setFournisseurs(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dataProvider]);

  let fournisseur_choices = fournisseurs.map(({ id, nom }) => ({
    id: id,
    name: nom,
  }));
  const validateRib = regex(
    /^[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/,
    "Le RIB doit être de la forme 111 222 333 444 555 666 777 888"
  );

  // console.log(project_choices);
  // TODO: [0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm {...props}>
        <AutocompleteInput
          label="Fournisseur"
          validate={required("Le fournisseur est obligatoire")}
          className={classes.autocomplete}
          source="FournisseurId"
          choices={fournisseur_choices}
        />
        <TextInput
          validate={[validateRib, required("Le RIB est obligatoire")]}
          className={classes.autocomplete}
          source="rib"
        />
      </SimpleForm>
    </Create>
  );
};
