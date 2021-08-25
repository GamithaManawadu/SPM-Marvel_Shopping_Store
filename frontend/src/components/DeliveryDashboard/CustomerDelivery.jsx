import React from "react";
// import { Link } from "react-router-dom";
//import { Card } from "react-bootstrap";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Box from "@material-ui/core/Box";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';

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

const useStyles = makeStyles((theme) => ({
    cardRoot: {
            width: "25rem",
            alignItems: "center",
            marginLeft: "170px",
            backgroundColor:"lightcoral",
        
          },
          button01: {
            borderRadius: 35,
            backgroundColor: "#ff0000",
            padding: "18px 36px",
            fontSize: "18px",
          },
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Delivery Address', 'Select Delivery Service', 'Select Payment Option'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Add your Delivery Address`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

// const useImgStyles = makeStyles(componentStyles);

const CustomerDelivery = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

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
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleNext}
                      className={classes.button}
                      disabled={activeStep === 1 || activeStep === 12}
                    >
                      Add New Address
                    </Button> */}
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

          {activeStep === 0 && (
            <Paper square elevation={0} className={classes.resetContainer}>
              {/* <Typography>
                All steps completed - you&apos;re finished
              </Typography> */}
              <Button
                        variant="contained"
                        color="primary"
                        onClick={handleReset}
                        className={classes.button}
                      >
                Add New Address
              </Button>
            </Paper>
          )}
        </div>
      </div>
      <br />
    </div>
  );
};

export default CustomerDelivery;