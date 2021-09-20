import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Sidebar from "./Sidebar";
import { Typography, Toolbar, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ModalForm from "./Modal";
import { inputFormElements } from "../pages/FormElements";
import Formmodal from "./FormModal";
import Icdmodal from "./IcdModal";

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main: "#0c1d7b",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: "#0c1d7b",
  },
  grid: {
    marginTop: "-43px",
    backgroundColor: "#fff",
  },
  btn: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  toolbarItem1: {
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
  form: {
    padding: "24px",
  },
  gridContainer: {
    padding: "24px 0px",
  },
  container: {
    height: "48px",
  },
}));

export default function MedicalForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [formdata, setformdata] = useState({});
  const handleClickOpen = () => {};
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    setOpen(true);
  };
  const handlechange = (e, data) => {
    setformdata({
      ...formdata,
      [data.name]: e.target.value,
    });
  };
  // console.log(open)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.grid}>
          <Paper className={classes.paper}>
            <Typography variant="h5" className={classes.typo}>
              Request Pharmacy Prior Authorizations
            </Typography>
          </Paper>

          <form autoComplete="off" className={classes.form}>
            <Toolbar className={classes.toolbarItem1}>
              <Typography variant="h6" className={classes.typotext}>
                Search for Member
              </Typography>
            </Toolbar>

            <Toolbar className={classes.toolbarItem2}>
              <form
                className={classes.gridContainer}
                // autoComplete="off"
                onSubmit={handleSubmit}
              >
                {/* <Grid container xs="12">
                 
                 
                    <Grid container direction="column" >

                      <Grid item>
<Typography variant="subtitle1">
  {input.label}
</Typography>
                      </Grid>

                   <Grid  item>
                       <TextField
                         {...input}
                         size="small"
                         required
                         onChange={(e) => handlechange(e, input)}
                       />
                     </Grid>
                    </Grid>
                    
                  ))}
                </Grid> */}

                <Grid container direction="row" xs={"12"} spacing={8}>
                  {inputFormElements.slice(0, 4).map((input) => (
                    <Grid item xs={"6"}>
                      <Grid container direction="column">
                        <Grid item>
                          <Typography variant="subtitle2" style={{fontWeight:"600"}}>
                            {input.textlabel}
                          </Typography>
                        </Grid>

                        <Grid item>
                          <TextField
                            {...input}
                            size="small"
                            required
                            onChange={(e) => handlechange(e, input)}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>

                <Grid container spacing={2}>
                  <Grid item xs={12} align="right" className={classes.btn}>
                    <Button
                      type="reset"
                      variant="contained"
                      color="primary"
                      disableElevation
                    >
                      Clear
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Toolbar>
          </form>
        </Grid>
      </Grid>
      <ModalForm open={open} handleClose={handleClose} formdata={formdata} />
      {/* <Formmodal/> */}
      <Icdmodal/>
    </div>
  );
}
