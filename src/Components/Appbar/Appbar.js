import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import firebaseApp from "../../Config/Firebase/Firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useState } from "react";
import "./Appbar.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar(props) {
  const [] = useState("none");

  const classes = useStyles();
  // let user = props.userData;
  // if (user) {
  //   let firtLetter = user.user.charAt(0);
  // }

  let logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        console.log(" Sign-out successful.");
        props.props.push("/");
        localStorage.romoveItem("currentuser");
        localStorage.romoveItem("teacherEmail");
      })
      .catch(function (error) {
        console.log(error.message);
        // An error happened.
      });
  };
console.log(props.showStuden)
console.log(props.popup)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "darkcyan" }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={()=>props.props.push("Home")} >
           <img  src={require('../../images/notes.png')} style={{height:30,widht:30}}/>
          </Typography>
          
        <Typography className="_pages" onClick={() =>  props.props.push("/CreateNotes")}>Create a New Note</Typography>
        <Typography className="_pages" onClick={()=>props.props.push("MyNotes")}>Notes By Me</Typography>
        <Typography className="_pages" onClick={() => logout()}><ExitToAppIcon /></Typography>
        </Toolbar>

      </AppBar>
    </div>
  );
}
