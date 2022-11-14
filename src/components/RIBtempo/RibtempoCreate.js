import { useEffect, useState } from "react";
import {
  AutocompleteInput,
  Create,
  SimpleForm,
  TextInput,
  useDataProvider,
} from "react-admin";

export const RibtempoCreate = (props) => {
  const dataProvider = useDataProvider();
  const [fournisseurs, setFournisseurs] = useState([]);

  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState();
  useEffect(() => {
    dataProvider
      .getList("fournisseurs", {
        pagination: { page: 1, perPage: 1000 },
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

  // console.log(project_choices);
  // TODO: [0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}
  return (
    <Create>
      <SimpleForm {...props}>
        <AutocompleteInput
          label="Fournisseur"
          source="FournisseurId"
          choices={fournisseur_choices}
        />
        <TextInput source="rib" />
      </SimpleForm>
    </Create>
  );
};
