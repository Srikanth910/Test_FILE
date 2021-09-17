import React from 'react';
import Sidebar from './Sidebar';
import { Typography,Toolbar,TextField,Button,Grid,Paper,makeStyles,Avatar,Select, FormControl, InputLabel, MenuItem , } from '@material-ui/core';
import ModalForm from './Modal';
// import Autocomplete from '@material-ui/lab/Autocomplete';

import { MedicalFormElements,MedicalFormElements2,MedicalFormElements3 } from '../pages/FormElements'
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/styles';
// import avatar from '../assets/avatar.png';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width:"300px",
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

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
      height:"300px"
  },
  toolbarItem2:{
    borderLeft:'2px solid #dcd7d7',
    borderBottom:'2px solid #dcd7d7',
    borderRight:'2px solid #dcd7d7',
    borderRadius:'6px',
},
form:{
    padding:'24px'
},
gridContainer:{
    padding:'24px 0px'

},
container:{
  height:'48px'
},  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  typo:{
      fontSize:'12px',
      fontWeight:'700px'
  }
}));

export default function Medical() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} className={classes.grid}>
          <Paper className={classes.paper}>
              <Typography variant="h5" className={classes.typo}>Request Medical Prior Authorizations</Typography>
              </Paper>
            
    <form autoComplete="off" className={classes.form}>
        
        
        <Toolbar className={classes.toolbarItem1}>

        <Avatar
  alt="Remy Sharp"
//   src={avatar}
  sx={{ width: 56, height: 56 }}  variant="square" style={{marginBottom:'129px'}}
/>

<div className={classes.root} style={{borderTop:'1px solid grey'}}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Typography variant="body1" className={classes.typo}>Name:</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Member ID:</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Plan Type/Group ID#:</Typography>
        </Grid>
      </Grid>



      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Date of Birth:</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography className={classes.typo}>LOB:</Typography>
        </Grid>
      </Grid>

      
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Address:</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography className={classes.typo}>IPA/MG:</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Phone:</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Effective:</Typography>
        </Grid>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Term:</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Typography className={classes.typo}>Special Programs:</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
        <Typography className={classes.typo}>Contact Number:</Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography className={classes.typo}>PBP Number:</Typography>
        </Grid>
      </Grid>
    </div>
</Toolbar>
<Toolbar className={classes.toolbarItem2} >
{/* <Grid item xs={12}>
    <Typography className={classes.typo} >Select Authorization Urgency</Typography>
    <Radio
        checked={selectedValue === 'a'}
        onChange={handleChange}
        value="a"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'A' }}
      />
      <Radio
        checked={selectedValue === 'b'}
        onChange={handleChange}
        value="b"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'B' }}
      />
</Grid> */}
      <form className={classes.gridContainer} autoComplete="off">
      {/* <Grid container spacing={5}>
                {
                  MedicalFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} size="small"/>
                  </Grid>)
                }
                 {
                  MedicalFormElements2.slice(0, 3).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} size="small"/>
                  </Grid>)
                }
                 {
                  MedicalFormElements3.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} size="small"/>
                  </Grid>)
                }
                
              </Grid> */}

<Grid container direction="row"  spacing={8}>
  
                  {MedicalFormElements.map((input) => (

                    <>
                    {input.type==="dropdown"?<>
                    
                    
                    <Grid item xs={"3"}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography variant="subtitle2" style={{fontWeight:"600"}}>
                          {input.textlabel}
                        </Typography>
                      </Grid>

                      <Grid item>
                      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          // value={age}
          // onChange={handleChange}\
          input={<BootstrapInput />}
           fullWidth
         
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                    
                    
                    </>:<>
                    
                    
                    
                    <Grid item xs={"3"}>
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
                          // onChange={(e) => handlechange(e, input)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                    </>}
                    </>
                   
                  //  input.type==="dropdown"?

                   
                  //   // <Grid item xs={"3"}>
                  //   //   <Grid container direction="column">
                  //   //     <Grid item>
                  //   //       <Typography variant="subtitle2" style={{fontWeight:"600"}}>
                  //   //         {input.textlabel}
                  //   //       </Typography>
                  //   //     </Grid>

                  //   //     <Grid item>
                  //   //       <TextField
                  //   //         {...input}
                  //   //         size="small"
                  //   //         required
                  //   //         // onChange={(e) => handlechange(e, input)}
                  //   //       />
                  //   //     </Grid>
                  //   //   </Grid>
                  //   // </Grid>
                  ))}
                </Grid>
            </form>
      </Toolbar>
      </form> 
     </Grid>
      </Grid>
      </div>
  );
}
