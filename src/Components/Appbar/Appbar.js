import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import firebaseApp from "../../Config/Firebase/Firebase";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { useState } from "react";
import "./Appbar.css";
const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      rigt: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

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
  const [display, setdisplay] = useState("none");

  const classes = useStyles();
  // let user = props.userData;
  // if (user) {
  //   let firtLetter = user.user.charAt(0);
  // }

  let logout = () => {
    firebaseApp
      .auth()
      .signOut()
      .then((res) => {
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
