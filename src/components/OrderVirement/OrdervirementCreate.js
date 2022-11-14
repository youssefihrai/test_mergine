import { useEffect, useState } from "react";
import { Create, SelectInput, SimpleForm, useDataProvider } from "react-admin";

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
  return (
    <Create>
      <SimpleForm>
        <SelectInput source="ribAtner" choices={rib_choices} />
      </SimpleForm>
    </Create>
  );
};
