import React from 'react';
import Sidebar from './Sidebar';
import { Typography,Toolbar,TextField,Button,Grid,Paper,makeStyles } from '@material-ui/core';
import ModalForm from './Modal';
import { inputFormElements } from '../pages/FormElements'


const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      main:'#0c1d7b',
    }
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color:'#0c1d7b',
  },
  grid:{
    marginTop:'-43px',
    backgroundColor:'#fff'
  },
  btn:{
    '& > *': {
      margin: theme.spacing(1),
    },
    },
  toolbarItem1:{
      border:'2px solid #dcd7d7',
      minHeight:'32px',
      borderRadius:'6px',
      backgroundColor:'#edeef3',
  },
  toolbarItem2:{
    borderLeft:'2px solid #dcd7d7',
    borderBottom:'2px solid #dcd7d7',
    borderRight:'2px solid #dcd7d7',
    borderRadius:'6px'
},
form:{
    padding:'24px'
},
gridContainer:{
    padding:'24px 0px'

},
container:{
  height:'48px'
}
}));

export default function PharmacyForm() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.grid}>
          <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.typo}>Request Pharmacy Prior Authorizations</Typography>
              </Paper>
            
    <form autoComplete="off" className={classes.form}>
        <Toolbar className={classes.toolbarItem1}>
          <Typography variant="h6" className={classes.typotext}>Search for Member</Typography>
        </Toolbar>
      
      <Toolbar className={classes.toolbarItem2}>
           <form className={classes.gridContainer} autoComplete="off">
              <Grid container spacing={5}>
                {
                  inputFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} size="small"/>
                  </Grid>)
                }
              </Grid>
             
              <Grid container spacing={2}>
                <Grid item xs={12} align="right" className={classes.btn}>
                  <Button  type="reset" variant="contained" color="primary" disableElevation>Clear</Button>
                  <Button type="submit" variant="contained" color="primary" onClick={handleClickOpen}>Search</Button>
                </Grid>

              </Grid>
            </form>
        </Toolbar>
      </form> 
     </Grid>
      </Grid>
      <ModalForm open={open} handleClose={handleClose}/>
      </div>
  );
}
