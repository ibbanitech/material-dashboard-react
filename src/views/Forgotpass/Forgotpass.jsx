import React from "react";
import { Link } from "react-router-dom"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import * as firebase from "firebase";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function Forgotpass(props) {
    const { classes } = props;

    function resetPass(){
      var email = document.getElementById("email").value;
      var actionCodeSettings = {
          url: 'http://localhost:3000/admin/dashboard',
      };
      if(email === ""){
          window.alert("Please enter your email address to continue");
      }
      else{
          firebase.auth().sendPasswordResetEmail(
              email, actionCodeSettings)
              .then(function() {
                  window.alert("A reset password link has been sent to"+ " "+ email+ ". Kindly reset the password through the same");
              })
              .catch(function(error) {
                  window.alert("Incorrect Email Address!")
              });
      }
   }
    
        return (
            <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                <Card>
                    <CardHeader color="info">
                    <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                    <p className={classes.cardCategoryWhite}>Complete your profile</p>
                    </CardHeader>
                    
                    <CardBody>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                            labelText="Email address"
                            id="email"
                            formControlProps={{
                            fullWidth:true
                            }}
                        />
                        </GridItem>
                    </GridContainer>
                    </CardBody>
                    
                    <CardFooter>
                    <Button color="info" onClick={resetPass}>Reset Password</Button>
                    </CardFooter>
                </Card>
                </GridItem>
            </GridContainer>
            </div>
        );
}
export default withStyles(styles)(Forgotpass);