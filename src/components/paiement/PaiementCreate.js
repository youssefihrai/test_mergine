import { useEffect, useState } from "react";
import {
  AutocompleteArrayInput,
  AutocompleteInput,
  Create,
  required,
  SelectInput,
  SimpleForm,
} from "react-admin";

import { makeStyles } from "@material-ui/styles";
import { Chip } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  autocomplete: {
    width: "650px",
  },
  chip: {
    fontWeight: "bold",
  },
}));
export const PaiementCreate = () => {
  
  
  function formatDate(string) {
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([], options);
  }
  
  const [orderVirement, setOrderVirement] = useState([
    {
      id: "null",
      ribAtner: 0,
      datecreation: "",
      etat: "",
    },
  ]);
  const [fournisseur, setFournisseur] = useState([
    {
      CodeFournisseur: "",
      nom: "",
      id: 0,
      FournisseurId: 0,
      rib: "",
      validation: "",
    },
  ]);
  const [ribFournisseur, setRibFournisseur] = useState([
    {
      CodeFournisseur: "",
      nom: "",
      id: 0,
      FournisseurId: 0,
      rib: "",
      validation: "",
    },
  ]);
  const [facture, setFacture] = useState([
    {
      id: "",
      DATEDOC: "1960-01-01T00:00:00.000Z",
      nom: "",
      NETAPAYER: 0.0,
    },
  ]);
  const [sum, setSum] = useState("0.000");
  const [orderVirementField, setOrderVirementField] = useState(true);
  const [fournisseurIdField, setFournisseurIdField] = useState(true);
  const [fournisseurRibField, setFournisseurRibField] = useState(true);

  const [onchangefournisseur, setOnchangefournisseur] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/ordervirementencours")
      .then((response) => response.json())
      .then((json) => setOrderVirement(json));
  }, []);
  useEffect(() => {
    if (onchangefournisseur > 0) {
      setRibFournisseur(
        fournisseur.filter((fournisseur) => {
          return fournisseur.FournisseurId === onchangefournisseur;
        })
      );
      let filterRib = fournisseur.filter((fournisseur) => {
        return fournisseur.FournisseurId === onchangefournisseur;
      });
      setRibFournisseur(filterRib);

    }
  }, [onchangefournisseur, fournisseur]);

  const getFactureByFourniseurId = (id) => {
    let url = "http://localhost:8080/getfacturebyfournisseur/" + id;
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setFacture(json);
      });
    // console.log(facture);
  };
  const getFournisseurFilteredByOv = (id) => {
    fetch(
      `http://localhost:8080/fournisseursribvalid?ordervirment={"id":"${id}"}`
    )
      .then((response) => response.json())
      .then((json) => setFournisseur(json));
  };

  let orderVirement_choices = orderVirement.map(({ id }) => ({
    id: id,
    name: id,
  }));
  let fournisseurs_choices = fournisseur.map(
    ({ FournisseurId, nom, CodeFournisseur }) => ({
      id: FournisseurId,
      name: `${nom} ${CodeFournisseur}`,
    })
  );

  let ribfournisseurs_choices = ribFournisseur.map(({ id, rib }) => ({
    id: id,
    name: rib,
  }));

  let facture_choices = facture.map(({ id,TTC,DateFacture,numeroFacture  }) => ({
    id: id,
    name: `${numeroFacture} | ${formatDate(DateFacture)} | ${TTC} `,
    
  }));


  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
       
      <SelectInput
        source="directeursigne"  
        choices={[
          { id: "Youness ZAMANI", name: "Youness ZAMANI" },
          { id: "Mohamed ZAMANI", name: "Mohamed ZAMANI" }
        
        ]}
      />
       
        <SelectInput
          validate={required("Ce champ est obligatoire")}
          className={classes.autocomplete}
          source="orderVirementId"
          onChange={(e) => {
            // console.log(e.target.value);
            if (e.target.value === "") {
              setOrderVirementField(true);
            } else {
              setOrderVirementField(false);
              getFournisseurFilteredByOv(e.target.value);
            }
          }}
          choices={orderVirement_choices}
        />
        <AutocompleteInput
          validate={required("Ce champ est obligatoire")}
          disabled={orderVirementField}
          className={classes.autocomplete}
          source="fournisseurId"
          choices={fournisseurs_choices}
          onChange={(e) => {
            setOnchangefournisseur(e);
            getFactureByFourniseurId(e);
            // console.log(e);
            if (!e) {
              setFournisseurIdField(true);
            } else {
              setFournisseurIdField(false);
            }
          }}
        />
        <SelectInput
          validate={required("Ce champ est obligatoire")}
          disabled={fournisseurIdField}
          className={classes.autocomplete}
          onChange={(e) => {
            if (e.target.value === "") {
              setFournisseurRibField(true);
            } else {
              setFournisseurRibField(false);
            }
          }}
          source="ribFournisseurId"
          choices={ribfournisseurs_choices}
        />
        <AutocompleteArrayInput
          validate={required("Ce champ est obligatoire")}
          disabled={fournisseurRibField}
          className={classes.autocomplete}
          source="facturelist"
          choices={facture_choices}
          onChange={(e) => {
            let sum = 0;
            e.forEach((fa) => {
              sum += facture.find((facture) => facture.id === fa).TTC;
              console.log(fa)
            });

            setSum(sum.toFixed(3));
          }}
        />
        <Chip className={classes.chip} label={`Total : ${sum}`} />

  
      </SimpleForm>
    </Create>
  );
};
