import { useEffect, useState } from "react";
import {
  AutocompleteArrayInput,
  AutocompleteInput,
  Create,
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
export const VirementCreate = () => {
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
  // const [factureFilter, setFactureFilter] = useState([
  //   { id: "", DATEDOC: "1960-01-01T00:00:00.000Z", nom: "", NETAPAYER: 0.0 },
  // ]);

  const [sum, setSum] = useState("0.000");

  const [orderVirementField, setOrderVirementField] = useState(true);
  const [fournisseurIdField, setFournisseurIdField] = useState(true);
  const [fournisseurRibField, setFournisseurRibField] = useState(true);

  const [onchangefournisseur, setOnchangefournisseur] = useState([]);

  useEffect(() => {
    fetch("http://10.111.1.217:8080/ordervirementencours")
      .then((response) => response.json())
      .then((json) => setOrderVirement(json));
    fetch("http://10.111.1.217:8080/fournisseursribvalid")
      .then((response) => response.json())
      .then((json) => setFournisseur(json));
    // fetch("http://10.111.1.217:8080/allfactures")
    //   .then((response) => response.json())
    //   .then((json) => setFacture(json));
  }, []);

  // const ribf = useRef([0]);

  useEffect(() => {
    // console.log("after use effect", fournisseur);
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

      // let filterFactureByFournisseur = facture.filter((facture) => {
      //   return facture.nom === ribFournisseur[0].nom;
      // });
      // setFactureFilter(filterFactureByFournisseur);
    }
  }, [onchangefournisseur, fournisseur]);

  const getFactureByFourniseurId = (id) => {
    let url = "http://10.111.1.217:8080/getfacturebyfournisseurid/" + id;
    // console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setFacture(json);
      });
    // console.log(facture);
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

  let facture_choices = facture.map(({ id, DATEDOC, nom, NETAPAYER }) => ({
    id: id,
    name: `${id} | ${DATEDOC.split("T")[0]} | ${nom} | ${NETAPAYER}`,
  }));
  //!! bonjour
  const classes = useStyles();
  return (
    <Create>
      <SimpleForm>
        <SelectInput
          className={classes.autocomplete}
          source="ordervirementid"
          onChange={(e) => {
            // console.log(e.target.value);
            if (e.target.value === "") {
              setOrderVirementField(true);
            } else {
              setOrderVirementField(false);
            }
          }}
          choices={orderVirement_choices}
        />
        <AutocompleteInput
          disabled={orderVirementField}
          className={classes.autocomplete}
          source="fournisseurid"
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
          disabled={fournisseurIdField}
          className={classes.autocomplete}
          onChange={(e) => {
            if (e.target.value === "") {
              setFournisseurRibField(true);
            } else {
              setFournisseurRibField(false);
            }
          }}
          source="ribfournisseurid"
          choices={ribfournisseurs_choices}
        />
        <AutocompleteArrayInput
          disabled={fournisseurRibField}
          className={classes.autocomplete}
          source="facturelist"
          choices={facture_choices}
          onChange={(e) => {
            let sum = 0;
            e.forEach((fa) => {
              sum += facture.find((facture) => facture.id === fa).NETAPAYER;
            });
            // console.log(sum.toFixed(3));
            setSum(sum.toFixed(3));
          }}
        />
        <Chip className={classes.chip} label={`Total : ${sum}`} />
      </SimpleForm>
    </Create>
  );
};
