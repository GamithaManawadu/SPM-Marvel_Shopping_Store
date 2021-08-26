import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';

import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import List from '@material-ui/core/List';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// @material-ui/icons
// import Dashboard from "@material-ui/icons/Dashboard";
// import Schedule from "@material-ui/icons/Schedule";
// import List from "@material-ui/icons/List";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: "40rem",
    height: "40rem",
    alignItems: "center",
    marginLeft: "70px",
    marginRight: "30px",
    backgroundColor: "lightcoral",
    marginTop: theme.spacing(2),
  },
  cardRoot02: {
    width: "100%",
    height: 150,
    maxWidth: 350,
    backgroundColor: "mistyrose",
  },
  input: {
    border: "none",
    borderBottom: "2px solid blue",
    width: "100%",
  },
  dialogBox: {
    alignItems: "center",
    width: "100%",
    
  },
  demo: {
    height: 160,
    maxWidth: 350,
    padding: "-2px -2px",
    alignItems: "center",
    backgroundColor: "mistyrose",
  },
  demo02: {
    height: 60,
    maxWidth: 350,
    padding: "-2px -2px",
    alignItems: "center",
    fontWeight: "bold",
    backgroundColor: "mistyrose",
  },
  button01: {
    borderRadius: 30,
    backgroundColor: "",
    padding: "6px 20px",
    fontSize: "10px",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(28),
  },
  button02: {
    borderRadius: 30,
    backgroundColor: "#ff0000",
    padding: "10px 28px",
    fontSize: "12px",
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(14),
  },
  root: {
    width: "100%",
    height: "100%",
    marginLeft: "15px",
    marginBottom: theme.spacing(16),
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  label01: {
    fontWeight: "bold",
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  alertSuccess: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

function renderRow(props) {
    const { index, style } = props;
  
    return (
      <ListItem button style={style} key={index}>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItem>
    );
  }
  
  renderRow.propTypes = {
    index: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,
  };

  function generate(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  function generateDelivery(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  function generateDiscount(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  function generateTotal(element) {
    return [0].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

function getSteps() {
  return ['Delivery Address', 'Select Delivery Service', 'Select Payment Option'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Add your Delivery Address`;
    case 1:
      return 'Select the preferred Delivery Service';
    case 2:
      return `Select the preferred Payment Method`;
    default:
      return 'Unknown step';
  }
}

// const useImgStyles = makeStyles(componentStyles);

const CustomerDelivery = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [dense] = React.useState(false);
    const [secondary] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };


    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };
  
  return (
    <div className="container">
      <h1 align="center">Checkout</h1>
      <div className="dashboard-content">
        <div className={classes.root}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      {activeStep === 0 && (
                        <Paper
                          square
                          elevation={0}
                          className={classes.resetContainer}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleClickOpen}
                            className={classes.button}
                          >
                            Add New Address
                          </Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                          >
                            <DialogTitle id="form-dialog-title">
                              Add New Address
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                To delivery your items please add a new delivery
                                address.
                              </DialogContentText>
                              <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                              />
                              <TextField
                                // autoFocus
                                margin="dense"
                                id="address"
                                label="Delivery Address"
                                type="text"
                                fullWidth
                              />
                              <TextField
                                // autoFocus
                                margin="dense"
                                id="landmark"
                                label="Land Mark"
                                type="text"
                                fullWidth
                              />
                              <TextField
                                // autoFocus
                                margin="dense"
                                id="postalcode"
                                label="Postal Code"
                                type="text"
                                fullWidth
                              />
                              <TextField
                                // autoFocus
                                margin="dense"
                                id="mobileno"
                                label="Mobile Number"
                                type="tel"
                                fullWidth
                              />
                              <TextField
                                // autoFocus
                                margin="dense"
                                id="email"
                                label="Email Address"
                                type="email"
                                fullWidth
                              />
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} color="primary">
                                Cancel
                              </Button>
                              <Button onClick={handleClose} color="primary">
                                Add
                              </Button>
                            </DialogActions>
                          </Dialog>
                          <br />
                          <br />
                          <Col sm={10}>
                            <Form.Check
                              type="radio"
                              className={classes.label01}
                              label="  A A Kamal Perera "
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                            &nbsp;&nbsp;
                            <label>
                              {" "}
                              No:10, Sama Uayana, Welivita Road, Malabe.{" "}
                            </label>
                            <br />
                            &nbsp;&nbsp;
                            <label>
                              {" "}
                              Landmark: turn Welivita road infront of SLIIT{" "}
                            </label>
                            <br />
                            &nbsp;&nbsp;
                            <label>
                              {" "}
                              Mobile No: 0770223344
                              <Grid item xs={5}>
                                <DeleteIcon
                                  style={{
                                    fontSize: 50,
                                    color: "red",
                                    marginLeft: "500px",
                                    marginTop: "-60px",
                                    marginBottom: "30px",
                                  }}
                                />
                              </Grid>
                            </label>
                          </Col>
                        </Paper>
                      )}
                    </div>
                    <div>
                      {activeStep === 1 && (
                        <Paper
                          square
                          elevation={0}
                          className={classes.resetContainer}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleClickOpen}
                            className={classes.button}
                          >
                            CityPak
                          </Button>
                          <Dialog
                          className={classes.dialogBox}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="form-dialog-title"
                          >
                            <DialogTitle id="form-dialog-title">
                              CityPak Delivery Service
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText>
                                Confirm your delivery details
                              </DialogContentText>
                              <Typography gutterBottom>
                                Name:  <br/>
                              <input
                              className={classes.input}
                                margin="dense"
                                id="address"
                                value="  A A Kamal Perera"
                                type="text"
                                fullWidth
                              />
                              </Typography>
                              <Typography gutterBottom>
                              Delivery Address:  <br/>
                              <input
                              className={classes.input}
                                margin="dense"
                                id="address"
                                value="  No:10, Sama Uayana, Welivita Road, Malabe."
                                type="text"
                                fullWidth
                              />
                              </Typography>
                              <Typography gutterBottom>
                             Landmark: <br/>
                              <input
                              className={classes.input}
                                margin="dense"
                                id="landmark"
                                value="  turn Welivita road infront of SLIIT"
                                type="text"
                                fullWidth
                              />
                              </Typography>
                              <Typography gutterBottom>
                             Postal Code: <br/>
                              <input
                              className={classes.input}
                                margin="dense"
                                id="postalcode"
                                value="  10115"
                                type="text"
                                fullWidth
                              />
                              </Typography>
                              <Typography gutterBottom>
                              Mobile Number: <br/>
                              <input 
                              className={classes.input}
                              margin="dense"
                                id="mobileno"
                                value="  0770223344"
                                type="tel"
                                fullWidth/>
                              </Typography>
                              <Typography gutterBottom>
                              Email Address: <br/>
                              <input 
                              className={classes.input}
                              margin="dense"
                                id="email"
                                value=" kamalpereralk@gmail.com"
                                type="email"
                                fullWidth/>
                              </Typography>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} color="primary">
                                Cancel
                              </Button>
                              <Button onClick={handleClose} color="primary">
                                Cofirm
                              </Button>
                            </DialogActions>
                          </Dialog>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Domex
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Grasshoppers
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Pick Me
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Uber
                          </Button>
                        </Paper>
                      )}
                    </div>
                    <div>
                      {activeStep === 2 && (
                        <Paper
                          square
                          elevation={0}
                          className={classes.resetContainer}
                        >
                          <Button
                            variant="contained"
                            color="secondary"
                            //   onClick={}
                            className={classes.button}
                          >
                            Credit or Debit Card
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Cash on Delivery
                          </Button>
                          &nbsp;
                          <Button
                            variant="contained"
                            color="secondary"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            PayPal
                          </Button>
                        </Paper>
                      )}
                    </div>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
        <Card className={classes.cardRoot}>
          <CardContent>
            <Typography
              variant="h4"
              textAlign="center"
              component={Box}
              marginBottom="0.25rem!important"
            >
              My Cart
            </Typography>
            <Typography variant="body2" textAlign="center" component="p">
              5 Items
            </Typography>
            <div className={classes.demo}>
              <List dense={dense}>
                {generate(
                  <ListItem>
                    <ListItemText
                      primary="Sub Total"
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <label>Rs.2500.00</label>
                  </ListItem>
                )}
                {generateDelivery(
                  <ListItem>
                    <ListItemText
                      primary="Delivery Charges"
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <label>Rs.250.00</label>
                  </ListItem>
                )}
                {generateDiscount(
                  <ListItem>
                    <ListItemText
                      primary="Bill Discount"
                      secondary={secondary ? "Secondary text" : null}
                    />
                    <label>Rs.100.00</label>
                  </ListItem>
                )}
              </List>
            </div>
            <br />
            <div className={classes.cardRoot02}>
              <FixedSizeList
                height={150}
                width={350}
                itemSize={40}
                itemCount={5}
              >
                {renderRow}
              </FixedSizeList>
            </div>
            <Button
              className={classes.button01}
              color="primary"
              variant="contained"
              component={Link}
              to={``}
            >
              Apply Coupon
            </Button>
            <br />
            <br />
            <div className={classes.demo02}>
              <List dense={dense}>
                {generateTotal(
                  <ListItem>
                    <ListItemText primary="Total Amount " />
                    <label>Rs.2650.00</label>
                  </ListItem>
                )}
              </List>
            </div>
            <br />
            <Button
              className={classes.button02}
              color="primary"
              variant="contained"
              component={Link}
              to={``}
            >
              Pay Now
            </Button>
          </CardContent>
        </Card>
      </div>
      <br />
    </div>
  );
};

export default CustomerDelivery;