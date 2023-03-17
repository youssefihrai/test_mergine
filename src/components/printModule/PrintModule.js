import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
const PrintModule = () => {
  const [orderVirement, setOrderVirement] = useState([
    {
      id: "null",
      ribAtner: 0,
      datecreation: "",
      etat: "",
    },
  ]);
  const [selctov, setSelctov] = useState();
  // const MySwal = withReactContent(Swal);
  useEffect(() => {
    fetch("http://localhost:8080/ordervirementetat")
      .then((response) => response.json())
      .then((json) => setOrderVirement(json));
  }, []);

  const showLoadingPdf = (json) => {
    Swal.fire({
      title: "Pdf est prêt",
      text: `Path: ${json.path}`,
      icon: "success",
    });
  };

  return (
    <Box component="span" display="flex" justifyContent="center" m={1}>
      <form>
        <select
          required="required"
          onChange={(e) => {
            console.log(e.target.value);
            setSelctov(e.target.value);
          }}
        >
          <option disabled="disabled" selected={true} value="">
            choix order de virement{" "}
          </option>
          {orderVirement.map((order) => {
            return (
              <option value={order.id}>
                {order.id} - {order.etat}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();

            Swal.fire({
              title: "Preparation du pdf en cours",
              html: "Merci de patienter",
              timer: 600000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
              },
            }).then((result) => {
           
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "Quelque chose s'est mal passé!",
               
                });
              }
            });

            console.log(selctov);
            fetch(
              `http://localhost:8080/oneordervirement?ordervirment={"id":"${selctov}"}`
            )
              .then((response) => response.json())
              .then((json) => {
                console.log(json);
                showLoadingPdf(json);
              });
          }}
        >
          Submit
        </button>
      </form>
    </Box>
  );
};

export default PrintModule;
