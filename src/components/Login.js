import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import logo from "../assets/logo.png";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    marginTop: "100px",
    backgroundColor:'white'
  },
  logo: {
    width: "100px",
    height: "43px",
    marginLeft:'124px'
  },
  button: {
    margin: theme.spacing(1),
  },
  typo:{
    color:'#0c1d7b',
    margin:'10px',
    display:'flex',
    justifyContent:'space-between'

  },
  input:{
    width: '100%',
  borderRadius:'5px',
  height:'38px',
  fontSize:'15px'
  },
  btn:{
    width:'100%',
    textTransform: 'none'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [ErrorMessage,setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "user"){
      props.history.push("/dashboard");
      localStorage.setItem("username", userName);
    } else if(userName === 'admin' && password === 'admin') {
      props.history.push("/dashboard");
      localStorage.setItem("username", userName);
    }else{
      setErrorMessage('Invalid username or password');
    }
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <img src={logo} alt="mhk" className={classes.logo} />;
      <Typography variant="h5" align="center">
        Welcome to MHK Admin.
      </Typography>
      <Typography variant="body2" align="center">
        Please sign to get access.
      </Typography>
     
      <Typography variant="body2" color="secondary" align="center">
        {ErrorMessage}
      </Typography>
      
      <br />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div>
                  <TextField
                  id="outlined-basic" 
                  label="UserName" 
                  variant="outlined" 
                  name="username"
                  size="small" 
                  className={classes.input} 
                  placeholder="UserName"
                  onChange={(e) => setUserName(e.target.value)} 
                  required
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div>
                  <TextField
                   type="password" 
                   name="password"
                   id="outlined-basic" 
                  label="Password" 
                  variant="outlined" 
                 size="small" 
                  className={classes.input} 
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)} 
                  required
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Button color="primary"  type="submit" variant="contained" className={classes.btn}>
            Sign In<PlayCircleFilledIcon />
            </Button>
            <div className={classes.typo}>
            <Typography variant="body2" >Forget Password</Typography>
            <Typography variant="body2">Request Access</Typography>
            </div>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
