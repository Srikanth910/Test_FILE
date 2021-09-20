import React, { useState } from "react";
import Sidebar from "./Sidebar";
import {
  Typography,
  Toolbar,
  TextField,
  Button,
  Grid,
  Paper,
  makeStyles,
  Avatar,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import ModalForm from "./Modal";
// import Test from "./Test";
// import Navbar from "./Navbar";

import { test } from "../pages/FormElements";
import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/styles";
// import avatar from '../assets/avatar.png';
import InputBase from "@material-ui/core/InputBase";
import Appbar from "./Appbar";
import Datatable from "./DataTable";
import { ServiceheadCells, createDatamain, createData ,icdheadCells} from "../pages/data";
import Formmodal from "./FormModal";
import Icdmodal from "./IcdModal";
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
    height: "300px",
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
  form: {
    padding: "24px",
  },
  gridContainer: {
    padding: "24px 0px",
  },
  container: {
    height: "48px",
  },
  root: {
    flexGrow: 1,
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
}));

export default function Medical(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("a");
   const [serviceProvider, setserviceProvider]=React.useState(false)
   const [IcdmodalOpen, setIcdmodal]=React.useState(false)
   const [modalformdata,setmodalformdata]=React.useState({})
   const [mainlist, setmainlist]=React.useState([])
    const [selectIcddetails, setselectIcddetails]=useState('')
  const Data = props.location?.state?.rowData;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setIcdmodal(false)
    // setmodalformdata(false)
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

   const duplicate=(data)=>{
      let temp=[...mainlist]
       temp.map(item=>{
          if(item.Npi===data.last_name){
             return data
          }
       })

   }
 const handleSubmit=()=>{
    
   setmainlist(mainlist=>[...mainlist, createData(modalformdata.Firtname, modalformdata.Npi ,  modalformdata.Dea, modalformdata.Speciality,modalformdata.street,   modalformdata.LastName, modalformdata.City,modalformdata.Fastfaxid, modalformdata.type, "Pending")])
   setserviceProvider(false)

 }
  console.log(selectIcddetails, ";ll")

const handlerowdata=()=>{
  
}

 console.log(selectIcddetails, "frerfe")
  return (
    <>
      {/* <Navbar /> */}
      <Appbar />
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
          <Grid item xs={10} className={classes.grid}>
            <Paper className={classes.paper}>
              <Typography variant="h5">
                Request Medical Prior Authorizations
              </Typography>
            </Paper>

            <form autoComplete="off" className={classes.form}>
              <Toolbar className={classes.toolbarItem1}>
                <Avatar
                  alt="Remy Sharp"
                  //   src={avatar}
                  sx={{ width: 56, height: 56 }}
                  variant="square"
                  style={{ marginBottom: "129px" }}
                />

                <div
                  className={classes.root}
                  style={{ borderTop: "1px solid grey" }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography variant="body1" className={classes.typo}>
                        Name: {Data?.first_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Member ID: {Data?.member_id}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Plan Type/Group ID#: {Data?.plan_desc}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Date of Birth: {Data?.dateof_birth}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className={classes.typo}>
                        LOB: {Data?.lineof_business}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Address: {Data?.address}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className={classes.typo}>
                        IPA/MG: {Data?.ipa_code}
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Phone: 123-456-7890
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Effective: {Data?.effective_date}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Term: {Data?.term_date}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography className={classes.typo}>
                        Special Programs:
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <Typography className={classes.typo}>
                        Contact Number: {Data?.contract_number}
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Typography className={classes.typo}>
                        PBP Number: {Data?.pbp_number}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              </Toolbar>
              <Toolbar className={classes.toolbarItem2}>
                <form className={classes.gridContainer} autoComplete="off">
                  <Grid container direction="row" spacing={3}>
                    {test.dropdown.map((input, index) => (
                      <>
                        {input.type === "dropdown" ? (
                          <>
                            <Grid item xs={"3"}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography
                                    variant="body1"
                                    style={{ fontWeight: "600" }}
                                    key={index}
                                  >
                                    {input.textlabel}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <FormControl>
                                    <Select
                                      labelId="demo-customized-select-label"
                                      id="demo-customized-select"
                                      input={<BootstrapInput />}
                                      fullWidth
                                    >
                                      <MenuItem value=""></MenuItem>
                                      <MenuItem value={10}>Ten</MenuItem>
                                      <MenuItem value={20}>Twenty</MenuItem>
                                      <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        ) : (
                          <>
                            <Grid item xs={3}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography
                                    variant="body1"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {input.textlabel}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <TextField
                                    {...input}
                                    size="small"
                                    required
                                    // onChange={(e) => handlechange(e, input)}
                                  />
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        )}
                      </>
                    ))}

                    <Grid
                      container
                      xs={12}
                      spacing={3}
                      style={{ marginLeft: "3px" }}
                    >
                      {test.topping.map((input, index) => (
                        <Grid item xs={3}>
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="body1"
                                style={{ fontWeight: "600" }}
                                key={index}
                              >
                                {input.textlabel}
                              </Typography>
                            </Grid>

                            <Grid item>
                              <TextField
                                {...input}
                                size="small"
                                required
                                // onChange={(e) => handlechange(e, input)}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>

                    {test.topping1.map((input, index) => (
                      <Grid item md={3}>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: "600" }}
                              key={index}
                            >
                              {input.textlabel}
                            </Typography>
                          </Grid>

                          <Grid item>
                            <TextField
                              {...input}
                              size="small"
                              required
                              // onChange={(e) => handlechange(e, input)}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}

                    {test.topping2.map((input, index) => (
                      <Grid item xs={3}>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: "600" }}
                              key={index}
                            >
                              {input.textlabel}
                            </Typography>
                          </Grid>

                          <Grid item>
                            <TextField
                              {...input}
                              size="small"
                              required
                              // onChange={(e) => handlechange(e, input)}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}

                    {test.topping3.map((input, index) => (
                      <Grid item xs={6}>
                        <Grid container direction="column">
                          <Grid item>
                            <Typography
                              variant="body1"
                              style={{ fontWeight: "600" }}
                              key={index}
                            >
                              {input.textlabel}
                            </Typography>
                          </Grid>

                          <Grid item>
                            <TextField
                              {...input}
                              size="small"
                              required
                              // onChange={(e) => handlechange(e, input)}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}

                    {test.radio.map((input, index) => (
                      <>
                        {input.type === "radio" ? (
                          <>
                            <Grid item xs={"3"}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography
                                    variant="body1"
                                    style={{ fontWeight: "600" }}
                                    key={index}
                                  >
                                    {input.textlabel}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <FormControl component="fieldset">
                                    <RadioGroup
                                      row
                                      aria-label="gender"
                                      name="row-radio-buttons-group"
                                    >
                                      <FormControlLabel
                                        value="Yes"
                                        control={<Radio />}
                                        label="Yes"
                                      />
                                      <FormControlLabel
                                        value="No"
                                        control={<Radio />}
                                        label="No"
                                      />
                                    </RadioGroup>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        ) : (
                          <>
                            <Grid item xs={3}>
                              <Grid container direction="column">
                                <Grid item>
                                  <Typography
                                    variant="body1"
                                    style={{ fontWeight: "600" }}
                                  >
                                    {input.textlabel}
                                  </Typography>
                                </Grid>

                                <Grid item>
                                  <FormControl>
                                    <Select
                                      labelId="demo-customized-select-label"
                                      id="demo-customized-select"
                                      input={<BootstrapInput />}
                                      fullWidth
                                    ></Select>
                                  </FormControl>
                                </Grid>
                              </Grid>
                            </Grid>
                          </>
                        )}
                      </>
                    ))}
                  </Grid>
                  <br />

                  <Toolbar className={classes.tool}>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h6">
                          Searching and Facility Providers
                        </Typography>
                      </Grid>

                      <Grid item>
                        <div>
                          <Button
                            type="reset"
                            variant="contained"
                            color="primary"
                            disableElevation
                            spacing={2}
                             onClick={()=>setserviceProvider(true)}
                          >
                            Add Servicing provider
                          </Button>

                          <Button variant="contained" color="primary">
                            ADD UnkNown Provider
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  </Toolbar>

                  <Toolbar className={classes.toolbarItem2}>
                    <div className={classes.gridContainer}>

                      <Datatable rows={mainlist} headCells={ServiceheadCells}/>
                    </div>

                    {/* <Test /> */}
                  </Toolbar>

                  <br />

                  <Toolbar className={classes.tool}>
                    <Grid container justifyContent="space-between">
                      <Grid item>
                        <Typography variant="h6" className={classes.typotext}>
                          ICD - Search Results
                        </Typography>
                      </Grid>

                      <Grid item>
                        <Button
                          type="reset"
                          variant="contained"
                          color="primary"
                          disableElevation
                          spacing={2}
                           onClick={()=>setIcdmodal(true)}
                        >
                          Add Servicing provider
                        </Button>

                        <Button variant="contained" color="primary">
                          ADD UnkNown Provider
                        </Button>
                      </Grid>
                    </Grid>
                  </Toolbar>

                  <Toolbar className={classes.toolbarItem2}>
                    <div className={classes.gridContainer}>
                    <Datatable headCells={icdheadCells} rows={selectIcddetails||[{}]}/>
                    </div>
                  </Toolbar>
                </form>
              </Toolbar>
              <Button
                type="reset"
                variant="contained"
                color="primary"
                disableElevation
                spacing={2}
              >
                Cancel
              </Button>

              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </div>
      <Formmodal open={serviceProvider} handleClose={handleClose}
      
      
      setmodalformdata={setmodalformdata}
      modalformdata={modalformdata}
      handleSubmit={handleSubmit}
      />
        <Icdmodal open ={IcdmodalOpen} handleClose={handleClose} setselectIcddetails={setselectIcddetails} setIcdmodal={setIcdmodal}/>
    </>
  );
}
