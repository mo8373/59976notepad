import React from "react";
import Appbar from "./../../Components/Appbar/Appbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./ViewNotes.css";
export default class ViewNotes extends React.Component {
  render() {
    // const userData = this.props.location.state.userData;
    let data = this.props.location.state.data;
    return (
      <div className="_container">
        <Appbar props={this.props.history} popup={true} />
        <br />
        <Grid container justify="center">
          <Grid item xs={11} sm={8}>
            <div className="_body_view">
              {data !== undefined ? (
                <>
                  <h1 style={{ color: "black" }}>{data.title}</h1>
                  <Typography style={{ fontSize: 20 }}>{data.desc}</Typography>
                </>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
