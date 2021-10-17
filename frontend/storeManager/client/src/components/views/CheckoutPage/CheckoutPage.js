import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import history from './../../../history';
import {
    getCartItems,
    removeCartItem,
    onSuccessBuy
} from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Result, Empty } from 'antd';
import Axios from 'axios';
import { Button} from 'react-bootstrap';

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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Paypal from '../../utils/Paypal';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "70%",
        height: "100%",
        marginLeft: "-5px",
        marginTop: "-120px",
        marginBottom: "100px",
    }

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

function CheckoutPage(props) {
    const dispatch = useDispatch();
    const deliveryCharge = 1.5;
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => {
                        if (response.payload.length > 0) {
                            calculateTotal(response.payload)
                        }
                    })
            }
        }

    }, [props.user.userData])

    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotal(total)
        setShowTotal(true)
    }


    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    setShowTotal(false)
                } else {
                    calculateTotal(response.payload.cartDetail)
                }
            })
    }

    const transactionSuccess = (data) => {
        dispatch(onSuccessBuy({
            cartDetail: props.user.cartDetail,
            paymentData: data
        }))
            .then(response => {
                if (response.payload.success) {
                    setShowSuccess(true)
                    setShowTotal(false)
                }
            })
    }

    const transactionError = () => {
        console.log('Paypal error')
    }

    const transactionCanceled = () => {
        console.log('Transaction canceled')
    }

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
      <div style={{ width: "100%", margin: "3rem auto" }}>
        <h1 style={{ textAlign: "right", marginRight: "200px" }}>Checkout</h1>
        <div>
          <UserCardBlock
            products={props.user.cartDetail}
            removeItem={removeFromCart}
          />

          {ShowTotal ? (
            <div style={{ marginTop: "3rem" }}>
            <h5 style={{ textAlign: "right", marginRight: "150px" }}>
                Total Amount: ${Total}{" "}
              </h5>
              <br />
            <h5 style={{ textAlign: "right", marginRight: "150px" }}>
                Delivery Charges: ${deliveryCharge}{" "}
              </h5>
              <br />
              <h3 style={{ textAlign: "right", marginRight: "150px" }}>
                Total Bill: ${Total+deliveryCharge}{" "}
              </h3>
            </div>
          ) : ShowSuccess ? (
            <Result status="success" title="Successfully Purchased Items" />
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <br />
              <Empty description={false} />
              <p style={{ textAlign: "right", marginRight: "150px" }}>No Items In the Cart</p>
            </div>
          )}
        </div>

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
                            variant="primary"
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
                                    marginLeft: "320px",
                                    marginTop: "-70px",
                                    marginBottom: "30px",
                                  }}
                                />
                              </Grid>
                            </label>
                          </Col>
                        </Paper>
                      )}
                    </div>
                    <br></br>
                    <div>
                      {activeStep === 1 && (
                        <Paper
                          square
                          elevation={0}
                          className={classes.resetContainer}
                        >
                          <Button
                            variant="outline-info"
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
                                Name: <br />
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
                                Delivery Address: <br />
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
                                Landmark: <br />
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
                                Postal Code: <br />
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
                                Mobile Number: <br />
                                <input
                                  className={classes.input}
                                  margin="dense"
                                  id="mobileno"
                                  value="  0770223344"
                                  type="tel"
                                  fullWidth
                                />
                              </Typography>
                              <Typography gutterBottom>
                                Email Address: <br />
                                <input
                                  className={classes.input}
                                  margin="dense"
                                  id="email"
                                  value=" kamalpereralk@gmail.com"
                                  type="email"
                                  fullWidth
                                />
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
                            variant="outline-info"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Domex
                          </Button>
                          &nbsp;
                          <Button
                            variant="outline-info"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Grasshoppers
                          </Button>
                          &nbsp;
                          <Button
                            variant="outline-info"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Sample 01
                          </Button>
                          &nbsp;
                          <Button
                            variant="outline-info"
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
                            variant="outline-info"
                            //   onClick={}
                            className={classes.button}
                          >
                            Credit or Debit Card
                          </Button>
                          &nbsp;
                          <Button
                            variant="outline-info"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            Cash on Delivery
                          </Button>
                          &nbsp;
                          <Button
                            variant="outline-info"
                            onClick={handleNext}
                            className={classes.button}
                          >
                            PayPal
                          </Button>
                        </Paper>
                      )}
                    </div>
                    <br></br>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                      <Button
                        variant="success"
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
        </div>

        {/* Paypal Button */}
        <div
          style={{
            textAlign: "right",
            marginRight: "200px",
            marginTop: "2rem",
          }}
        >
          {ShowTotal && (
            <Paypal
              toPay={Total}
              onSuccess={transactionSuccess}
              transactionError={transactionError}
              transactionCanceled={transactionCanceled}
            />
          )}
        </div>
      </div>
    );
}

export default CheckoutPage
