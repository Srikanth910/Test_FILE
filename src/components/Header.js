import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import logo from "../assets/logo.png";
import Appbar from "./Appbar";
import { Link } from "react-router-dom";
import MedicalForm from './MedicalForm';

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#fff",
    position: "sticky",
    top: "0px",
    margin:'auto'
  },
  logo: {
    width: "100px",
    height: "43px",
    marginLeft: "15px",
  },
  icon: {
    color: "#0c1d7b",
    marginLeft: "64px",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    fontFamily:'Roboto',
    fontSize: "13px"
  },
  list: {
    width: "100%",
    maxWidth: "264px",
    backgroundColor: "#c7c0c0",
    color: "#f3e7e7eb",
  },
  listitemtext: {
    color: "#0c1d7b",
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  typo:{
    fontFamily:'Roboto',
    fontSize: "13px"
  } 
}));



export default function Header(props) {
  const classes = useStyles();
  const username = localStorage.getItem("username");
  const handlelogout=(e)=>{
    e.preventDefault();
    props.history.push('/login');
    }

  return (
    <>
      <AppBar position="fixed" className={classes.header}>
        <Toolbar disableGutters={true}>
          <img src={logo} alt="mhk" className={classes.logo} />;
          <div className={classes.icon}>
            <HomeIcon color="primary" /><br />
            <Link className={classes.typo} to="/logout" onClick={handlelogout}>Logout</Link> <br />
            <div className={classes.user}>Welcome, {username}</div>
          </div>
        </Toolbar>
      </AppBar>
      <div>
        <Appbar />
        <MedicalForm />
        </div>
    </>
  );
}
