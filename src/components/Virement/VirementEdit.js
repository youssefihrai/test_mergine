import {
  Edit,
  FormDataConsumer,
  NumberInput,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  useRedirect,
} from "react-admin";
import Swal from "sweetalert2";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton id="save" />
  </Toolbar>
);
export const VirementEdit = (props) => {
  const redirect = useRedirect();

  function annuleAlert(params) {
    if (params === "Annuler") {
      Swal.fire({
        title: "Êtes-vous sûr?",
        text: "Voulez-vous vraiment Annule cette virement?",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Non!",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, Annule!",
      }).then((result) => {
        if (result.isConfirmed) {
          document.querySelector("#save").click();
          Swal.fire("Annule!", "Virement Annuler", "success");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            "Modification annulée",
            "Virement pour ne pas changer.",
            "error"
          );
          redirect("list", "virements");
        }
      });
    }
  }

  return (
    <Edit {...props}>
      <SimpleForm toolbar={<UserEditToolbar />}>
        <TextInput source="orderVirementId" disabled />
        <TextInput source="nom" disabled />
        <TextInput source="rib" disabled />
        <NumberInput source="montantVirement" disabled />
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.Etat !== "Reglee" &&
            formData.Etat !== "Annuler" && (
              <SelectInput
                // disabled={etatDisaibled}
                {...rest}
                source="Etat"
                onChange={(e) => {
                  console.log(e.target.value);
                  annuleAlert(e.target.value);
                }}
                validate={required()}
                choices={[
                  { id: "En cours", name: "En cours" },
                  { id: "Annuler", name: "Annuler" },
                ]}
              />
            )
          }
        </FormDataConsumer>
      </SimpleForm>
    </Edit>
  );
};
