import React, { useEffect, useState } from "react";
// import { useDataProvider } from "react-admin";

const DataFournisseurList = (props) => {
  //   const dataProvider = useDataProvider();
  const [fournisseursList, setFournisseursList] = useState([]);
  useEffect(() => {
    fetch("http://10.111.1.217:8080/allfournisseursvalid")
      .then((response) => response.json())
      .then((json) => setFournisseursList(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("test", fournisseursList);
  return fournisseursList ? (
    <>
      <input
        list="fournissuers"
        name="fournissuer"
        id="fournissuerId"
        autocomplete="off"
        className="datalist"
        onChange={(e) => {
          //   console.log(e.target.value);
          props.fournisseursName = e.target.value;
          console.log("============================>", props);
        }}
      />
      <datalist id="fournissuers">
        {fournisseursList.map((elm) => {
          return <option id={elm.id}>{elm.nom}</option>;
        })}
      </datalist>
    </>
  ) : (
    <>Loading ...</>
  );
};

export default DataFournisseurList;
