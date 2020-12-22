import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Login,
  SignUp,
  ForgotPassword,
  Home,
  CreateNotes,
  ViewNotes,
  MyNotes,
  EditNotes
} from "./../../Container";

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/CreateNotes" component={CreateNotes} />
          <Route path="/ViewNotes" component={ViewNotes} />
          <Route path="/MyNotes" component={MyNotes} />
          <Route path="/EditNotes" component={EditNotes} />

          
        </div>
      </Router>
    );
  }
}
