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
} from "@material-ui/core";
import DataTable from "./DataTable";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { headCells, rows } from "../pages/data";

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
}));

export default function ModalForm({ handleClose, open , formdata}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [tablerows, setrows] = React.useState(rows);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  const onSearch = (data, text) => {
    let temp = Object.values(data).filter((person) => {
      // debugger;
      const savageMatch =
        JSON.stringify(person).toLowerCase().indexOf(text.toLowerCase()) !== -1;

      if (savageMatch) return savageMatch;
    });
    return temp;
  };
  const handleChange = (event) => {
    // setChecked(event.target.checked);
    if (event.target.value) {
      console.log(onSearch(rows, event.target.value));
      setrows(onSearch(rows, event.target.value));
    }
  };

  React.useEffect(() => {
    if (formdata) {
      let data = rows.filter((item) => item.member_id === formdata.MemberID);
      setrows(data);
    }
  }, [formdata]);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Member Search Result
              <Button style={{ float: "right" }}>
                <CloseIcon onClick={handleClose} />
              </Button>
            </Typography>
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <div className={classes.grid}>
            <Toolbar className={classes.toolbarItem1}>
              <Typography variant="h6" className={classes.typotext}>
                Member Search Results
              </Typography>
            </Toolbar>
            <Typography style={{ float: "right" }}>
              Search:
              <TextField
                type="text"
                 size="small"
                  variant="outlined"
                placeholder="seach..."
                onChange={(e) => handleChange(e)}
              />
            </Typography>

            {/* {rows.filter((val)=>{
        if(searchTerm === ""){
          return val
        }
        else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
        }
      }).map((val,key)=>{
        return <div>{val.first_name}</div>
      })} */}

            <DataTable
            headCells={headCells} rows={tablerows}
            />
          </div>
        </DialogContent>
        <Box py={5}>
             <DialogActions>
               <Button color="primary" variant="contained">
                 Print
               </Button>
               <Button color="primary" variant="contained" onClick={handleClose} >
                 Cancel
               </Button>
             </DialogActions>
             ``
           </Box>
      </Dialog>
    </div>
  );
}
