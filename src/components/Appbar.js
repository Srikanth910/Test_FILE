import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#0c1d7b",
    height: "50px",
    zIndex: "-1000",
    position: "sticky",
  },
}));

export default function Appbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative" className={classes.root}>
        <Toolbar disableGutters={true}></Toolbar>
      </AppBar>
    </>
  );
}
