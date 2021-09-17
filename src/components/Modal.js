import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Slide,
  Grid,
  Paper,
  Box,
  DialogActions,
  Button,
  TextField,
} from "@material-ui/core";
import DataTable from "./DataTable";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
  grid: {
    height: "504px",
    // width: '100%'
    // maxWidth:
  },
  dialogtitle: {
    height: "100px",
  },
  dialogWrapper: {
    // minWidth: "500px"
  },
}));

export default function ModalForm({ handleClose, open }) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        fullWidth
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.dialogWrapper }}
        fullWidth={true}
        maxWidth={"xl"}
      >
        <DialogTitle>
          <Grid container spacing={4} justifyContent="space-between">
            <Grid item>
              <Typography variant="h4">Member Search Result</Typography>
            </Grid>

            <Grid item>
              <CloseIcon />
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <Paper elevation={"0"} fullWidth>
            <Grid container direction={"column"} spacing={4}>
              <Grid item>
                <Paper elevation={1} style={{ backgroundColor: "#e9e1e1" }}>
                  <Box px={2} py={2}>
                    <Typography variant="h6">Member Search Result</Typography>
                  </Box>
                </Paper>
              </Grid>

              <Grid item>
                <Grid
                  container
                  xs
                  direction="row"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography variant="h6">show</Typography>
                  </Grid>
                  <Grid item xs>
                    <TextField />
                    {/* </Grid> */}
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                {/* <div className={classes.grid}> */}
                  <DataTable />
                {/* </div> */}
              </Grid>
            </Grid>
          </Paper>

         
          <Box py={5}>
            <DialogActions>
              <Button color="primary" variant="contained">
                Print
              </Button>
              <Button color="primary" variant="contained">
                Cancel
              </Button>
            </DialogActions>``
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
