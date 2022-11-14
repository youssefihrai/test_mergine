// import React from "react";
// import {
//   Create,
//   Form,
//   TextInput,
//   RichTextInput,
//   SaveButton,
// } from "react-admin";
// import { Grid } from "@mui/material";
// import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
// // import { DataGrid } from "@mui/x-data-grid";
// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//     width: "100%",
//     height: 400,
//   },
// }));

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstName") || ""} ${
//         params.getValue(params.id, "lastName") || ""
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export const PostCreate = () => {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Create>
//       <Form>
//         <Grid container>
//           <Grid itm xs={6}>
//             <TextInput source="title" fullWidth />
//           </Grid>
//           <Grid itm xs={6}>
//             <TextInput source="author" fullWidth />
//           </Grid>
//           {/* <Grid itm xs={12}>
//           <RichTextInput source="body" fullWidth />
//         </Grid> */}
//           <div>
//             <button type="button" onClick={handleOpen}>
//               react-transition-group
//             </button>
//             <Modal
//               aria-labelledby="transition-modal-title"
//               aria-describedby="transition-modal-description"
//               className={classes.modal}
//               open={open}
//               onClose={handleClose}
//               closeAfterTransition
//               BackdropComponent={Backdrop}
//               BackdropProps={{
//                 timeout: 500,
//               }}
//             >
//               <Fade in={open}>
//                 <div className={classes.paper}>
//                   <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={5}
//                     rowsPerPageOptions={[5]}
//                     checkboxSelection
//                     disableSelectionOnClick
//                   />
//                 </div>
//               </Fade>
//             </Modal>
//           </div>
//           <Grid itm xs={12}>
//             <SaveButton />
//           </Grid>
//         </Grid>
//       </Form>
//     </Create>
//   );
// };
