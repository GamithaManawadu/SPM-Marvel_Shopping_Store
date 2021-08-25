import React from "react";
import { Link } from "react-router-dom";
//import { Card } from "react-bootstrap";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// core components
// import componentStyles from "../../assets/images/background.jpg";


const useStyles = makeStyles({
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

});

// const useImgStyles = makeStyles(componentStyles);

const CustomerDelivery = () => {

  const classes = { ...useStyles() };
  
  return (
    <div className="dashboard-content">
      <br/>
      {/* <Card className={classes.cardRoot}>
        <CardContent>
          <Typography
            variant="h4"
            component={Box}
            marginBottom="0.25rem!important"
          >
            Delivery
          </Typography>
          <Typography variant="body2" component="p">
            All the Delivery Services content.
          </Typography>
          <br/>
          <Button className={classes.button01} color="primary" variant="contained" component={Link} to={`/auth/user/delivery/add/deliveryservice`}>
          Add New Delivery Service
          </Button>
          <br /><br />
          <Button className={classes.button01} color="primary" variant="contained" component={Link} to={`/auth/user/delivery/deliveryservices`}>
          Delivery Services List
          </Button>
        </CardContent>
      </Card> */}
      <br/>
      {/* <Card className={classes.cardRoot}>
        <CardContent>
          <Typography
            variant="h4"
            component={Box}
            marginBottom="0.25rem!important"
          >
            Payments
          </Typography>
          <Typography variant="body2" component="p">
            All the Payment Details content.
          </Typography>
          <br/>
          <Button className={classes.button01} color="primary" variant="contained" component={Link} to={`/auth/user/payments/`}>
          Payments Details List
          </Button>
          <br /><br />
          <Button className={classes.button01} color="primary" variant="contained" component={Link} to={``}>
          See More
          </Button>
        </CardContent>
      </Card> */}
      <br />
    </div>
  );
};

export default CustomerDelivery;