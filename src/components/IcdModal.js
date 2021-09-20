// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   Slide,
//   Grid,
//   Paper,
//   Box,
//   DialogActions,
//   Button,
//   TextField,
// } from "@material-ui/core";
// import DataTable from "./DataTable";
// import CloseIcon from "@material-ui/icons/Close";
// import { headCells, rows } from "../pages/data";

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });
// const useStyles = makeStyles((theme) => ({
//   grid: {
//     height: "504px",
//     // width: '100%'
//     // maxWidth:
//   },
//   dialogtitle: {
//     height: "100px",
//   },
//   dialogWrapper: {
//     // minWidth: "500px"
//   },
// }));

// export default function ModalForm({ handleClose, open, formdata }) {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState(false);
//   const [tablerows, setrows] = React.useState(rows);

//   const onSearch = (data, text) =>{
//     let temp=
//     Object.values(data).filter((person) => {
//       // debugger;
//       const savageMatch =
// JSON.stringify(person).toLowerCase().indexOf(text.toLowerCase()) !== -1;

//       if (savageMatch) return savageMatch;
//     });
//      return temp
//   }
//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//     if (event.target.value) {
//        console.log(onSearch(rows, event.target.value))
//       setrows(onSearch(rows, event.target.value));
//     }
//   };

//   React.useEffect(() => {
//     if (formdata) {
//       let data = rows.filter((item) => item.member_id === formdata.MemberID);
//       setrows(data);
//     }
//   }, [formdata]);

//   return (
//     <div>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//         fullWidth
//         aria-describedby="alert-dialog-slide-description"
//         classes={{ paper: classes.dialogWrapper }}
//         fullWidth={true}
//         maxWidth={"xl"}
//       >
//         <DialogTitle>
//           <Grid container spacing={4} justifyContent="space-between">
//             <Grid item>
//               <Typography variant="h4">Member Search Result</Typography>
//             </Grid>

//             <Grid item>
//               <CloseIcon />
//             </Grid>
//           </Grid>
//         </DialogTitle>
//         <DialogContent dividers>
//           <Paper elevation={"0"} fullWidth>
//             <Grid container direction={"column"} spacing={4}>
//               <Grid item>
//                 <Paper elevation={1} style={{ backgroundColor: "#e9e1e1" }}>
//                   <Box px={2} py={2}>
//                     <Typography variant="h6">Member Search Result</Typography>
//                   </Box>
//                 </Paper>
//               </Grid>

//               <Grid item>
//                 <Grid
//                   container
//                   xs
//                   direction="row"
//                   justifyContent="space-between"
//                   spacing={3}
//                 >
//                   <Grid item>
//                     <Typography variant="h6">Search :</Typography>
//                   </Grid>
//                   <Grid item xs>
//                     <TextField
//                       variant="outlined"
//                       size="small"
//                       onChange={handleChange}
//                     />
//                     {/* </Grid> */}
//                   </Grid>
//                 </Grid>
//               </Grid>

//               <Grid item>
//                 {/* <div className={classes.grid}> */}
//                 <DataTable headCells={headCells} rows={tablerows} />
//                 {/* </div> */}
//               </Grid>
//             </Grid>
//           </Paper>

//           <Box py={5}>
//             <DialogActions>
//               <Button color="primary" variant="contained">
//                 Print
//               </Button>
//               <Button color="primary" variant="contained">
//                 Cancel
//               </Button>
//             </DialogActions>
//             ``
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Toolbar,
  makeStyles,
  Button,
  TextField,
  DialogActions,
  Box,
  Grid,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Select,
  FormControl,
} from "@material-ui/core";
import { StylesContext, withStyles } from "@material-ui/styles";
import InputBase from "@material-ui/core/InputBase";
import DataTable from "./DataTable";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { icdheadCells, rows, createData } from "../pages/data";
import { MainFormElements } from "../pages/FormElements";
import Datatable from "./DataTable";
const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
  },
  toolbarItem1: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
  },
  tool: {
    border: "2px solid #dcd7d7",
    minHeight: "32px",
    borderRadius: "6px",
    backgroundColor: "#edeef3",
  },
  toolbarItem2: {
    borderLeft: "2px solid #dcd7d7",
    borderBottom: "2px solid #dcd7d7",
    borderRight: "2px solid #dcd7d7",
    borderRadius: "6px",
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: "200px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

export default function Icdmodal({
  handleClose,
  open,
  formdata,
  setmodalformdata,
  modalformdata,
  setselectIcddetails,
  handleSubmit,
  setIcdmodal
}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [text, settext] = useState("");

  const [tablerows, setrows] = React.useState([
    createData(
      "2323",
      "a systematic statement of a body of law especially : one given statutory force. 2 : a"
    ),

    createData(
      "2345",
      "a systematic statement of a body of law especially : one given statutory force. 2 : a"
    ),
    createData(
      "2365",
      "a systematic statement of a body of law especially : one given statutory force. 2 : a"
    ),
  ]);

  //    const [modalformdata,setmodalformdata]=React.useState({})

  const handlechange = (e, data) => {
    setmodalformdata({
      ...modalformdata,
      [data.name]: e.target.value,
    });
  };

  // const handlsubmit=(event)=>{
  //     event.preventDefault();
  //     handleClose()
  // }
  //  console.log(modalformdata)
  const onSearch = (data, text) => {
    let temp = Object.values(data).filter((person) => {
      // debugger;
      const savageMatch =
        JSON.stringify(person).toLowerCase().indexOf(text.toLowerCase()) !== -1;

      if (savageMatch) return savageMatch;
    });
    return temp;
  };

  const handlesearchchange = (event) => {
    if (event.target.value) {
      // console.log(onSearch(tablerows, event.target.value));
      settext(event.target.value);
    }
  };
  const handlesearch = () => {
    // console.log(onSearch(tablerows, event.target.value));
    setrows(onSearch(tablerows, text));
  };
   const handlerowdata=(row)=>{
    setIcdmodal(false)
     
     setselectIcddetails([row])
   }
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              ICD Search
              <Button style={{ float: "right" }}>
                <CloseIcon onClick={handleClose} />
              </Button>
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers style={{ minWidth: "50rem" }}>
          {/* <form > */}

          <div className={classes.grid}>
            <Grid container direction="row" xs={12} spacing="5">
              <Grid item xs={4}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body1" style={{ fontWeight: "600" }}>
                      {"ICD CODES :"}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={handlesearchchange}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body1" style={{ fontWeight: "600" }}>
                      {"DESCRIPTION :"}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <TextField variant="outlined" size="small" fullWidth />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box py={2}>
              <Grid container justifyContent="center">
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handlesearch}
                >
                  Search
                </Button>
              </Grid>
            </Box>
            <Toolbar className={classes.tool}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h6" className={classes.typotext}>
                    ICD - Search Results
                  </Typography>
                </Grid>
              </Grid>
            </Toolbar>

            <Toolbar className={classes.toolbarItem2}>
              {/* <div className={classes.gridContainer}> */}
              <Datatable rows={tablerows} headCells={icdheadCells}
              handlerowdata={handlerowdata}

              IcdModal={true}
              />
              {/* </div> */}
            </Toolbar>
          </div>
          {/* </form> */}
        </DialogContent>
        <Box py={5}>
          <DialogActions>
            <Button color="primary" variant="contained" onClick={handleClose}>
              Cancel
            </Button>
          </DialogActions>
          ``
        </Box>
      </Dialog>
    </div>
  );
}
