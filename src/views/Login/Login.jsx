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

function Login(props) {
  const { classes } = props;

  function loginUser(){
          var email = document.getElementById("email").value;
          var pass = document.getElementById("password").value;
          if(email === ""){
              window.alert("Please enter your email address to continue")
          }
          else{
              firebase.auth().signInWithEmailAndPassword(email, pass).then(function(){
                var UID = firebase.auth().currentUser.uid;
                var ref = firebase.database().ref().child("users").child(UID).child("user_type");
                ref.on("value",function(snapshot){
                  var userType = snapshot.val();
                  window.onload = localStorage.setItem("User",userType);
                  window.onload = localStorage.setItem("User_status", "SET");
                  window.location.replace("http://localhost:3000/admin/dashboard");
              });
              }).catch(function(error) {
                  window.alert("Please make sure that you are Registered with the same email address and password");
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
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    formControlProps={{
                      fullWidth: true
                    }}
                   />
                </GridItem>
                </GridContainer>
            </CardBody>
            
            <CardFooter>
              <Button color="info" onClick={loginUser}>Sign-In</Button>
            </CardFooter>

            <CardFooter>
              <Link to={"/forgotPass"}>Forgot Password</Link>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Login);