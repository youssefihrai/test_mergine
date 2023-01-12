import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import {
  Create,
  required,
  SelectInput,
  SimpleForm,
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

export const OrdervirementCreate = () => {
  const dataProvider = useDataProvider();
  const [ribAtner, setribAtner] = useState([]);
  useEffect(() => {
    dataProvider
      .getList("ribatner", {
        pagination: { page: 1, perPage: 20 },
        sort: { field: "nom", order: "ASC" },
      })
      .then(({ data }) => {
        setribAtner(data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, [dataProvider]);

  let rib_choices = ribAtner.map(({ id, nom, rib }) => ({
    id: id,
    name: `(${nom}) ${rib}`,
  }));
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <SelectInput
          className={classes.autocomplete}
          validate={required("Le RIB est obligatoire")}
          source="ribAtner"
          choices={rib_choices}
        />
      </SimpleForm>
    </Create>
  );
};
